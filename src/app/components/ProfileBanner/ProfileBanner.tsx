"use client";
import Image from "next/image";
import { SelectDemo } from "../Select/Select";
import { ApolloError, gql, useMutation, useQuery } from "@apollo/client";
import { useUserStore } from "@/hooks/useStore";
import { TailSpin } from "react-loader-spinner";
import { useEffect } from "react";
import { ACCESS_TOKEN_MUTATION } from "@/graphql/mutations";
import { useRouter } from "next/navigation";

const UserQuery = gql`
  query {
    myProfile {
      id
      name
      avatar
    }
  }
`;

export default function ProfileBanner() {
  const token = localStorage.getItem("access_token");
  const {
    data,
    loading,
    error,
    refetch: refetchUser,
  } = useQuery(UserQuery, {
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });

  const router = useRouter();
  const [refresh] = useMutation(ACCESS_TOKEN_MUTATION);
  const { user, setUser } = useUserStore();

  useEffect(() => {
    if (data && !loading && !user) {
      setUser(data?.myProfile);
    }
  }, [data, loading, setUser, user]);

  useEffect(() => {
    const refreshAccessToken = async () => {
      const refreshToken = localStorage.getItem("refresh_token");

      if (!refreshToken) {
        localStorage.clear();
        router.push("/");
      }

      try {
        const response = await refresh({
          variables: { refreshToken },
        });

        const { access_token } = response.data.refreshToken;
        localStorage.setItem("access_token", access_token);

        await refetchUser({
          context: {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          },
        });
      } catch (err) {
        if (err instanceof ApolloError && err?.graphQLErrors[0]?.extensions?.code === "UNAUTHENTICATED") {
          localStorage.clear();
          router.push("/");
        }
        console.error("Error refreshing access token:", err);
      }
    };

    if (error?.graphQLErrors[0]?.extensions?.code === "UNAUTHENTICATED") {
      refreshAccessToken();
    }
  }, [error, refresh, refetchUser, router]);

  const photoStub = () => {
    if (loading || !user?.avatar) {
      return "/images/circle-gray.png";
    } else {
      return user.avatar;
    }
  };

  return (
    <div className="bg-[#DAE6F2] flex flex-col md:flex-row justify-center items-center xxs:justify-end md:justify-center xxs:items-end xs:items-end sm:items-end md:items-end min-h-[200px] px-6">
      <div className="mb-4 md:mb-0 md:mr-9 min-w-[150px] min-h-[150px] sm:min-w-[100px] sm:min-h-[100px] xxs:hidden xs:hidden sm:hidden md:flex">
        <Image src={photoStub()} width={150} height={150} alt="avatar" className="rounded-full" />
      </div>
      <div className="flex flex-col w-full md:w-auto">
        <div className="flex flex-row justify-between w-full mb-5 sm:mt-6 items-start relative">
          <div className="flex items-start">
            <div className="mb-4 md:mb-0 md:mr-9 max-w-[60px] max-h-[60px] xxs:flex xs:flex sm:flex md:hidden relative z-10">
              <Image src={photoStub()} width={150} height={150} alt="avatar" className="rounded-full" />
            </div>
            {loading ? (
              <TailSpin color="black" height={40} width={40} ariaLabel="tail-spin-loading" />
            ) : (
              <p className="text-3xl xxs:text-xl xs:text-xl s:text-3xl md:text-3xl xxs:ml-[22px] sm:ml-0 font-semibold md:text-left mr-[100px] xxs:mr-[10px] xs:mr-[50px]">
                {user?.name}
              </p>
            )}
          </div>
          <div className="min-w-6 min-h-6">
            <Image
              src="/images/Icon.png"
              width={16}
              height={16}
              alt="icon menu"
              className="xxs:display xs:display sm:display md:display lg:hidden"
            />
          </div>
          <div className="flex flex-row items-center space-x-4 xxs:hidden xs:hidden sm:hidden md:hidden lg:flex">
            <div className="w-full md:w-[180px]">
              <SelectDemo placeholder="Request a Change" additionalClasses="hover:bg-white " />
            </div>
            <div className="relative w-full md:w-[56px]">
              <SelectDemo additionalClasses="hover:bg-white " />
              <Image
                src="/images/settings.png"
                width={16}
                height={16}
                alt="icon select"
                className="absolute right-1/2 top-1/2 -translate-y-1/2"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-nowrap space-x-4 overflow-x-auto xl:max-w-[1200px] lg:max-w-[800px] md:max-w-[600px] snap-x">
          {["Personal", "Job", "Time Off", "Emergency", "Documents", "Notes", "Benefits", "Assets", "Training"].map(
            (link) => (
              <a
                className={`cursor-pointer p-4 rounded-t-lg snap-start ${
                  link === "Time Off" && "min-w-28 bg-white p-5"
                }`}
                key={link}
              >
                {link}
              </a>
            )
          )}
          <div className="cursor-pointer mt-2">
            <SelectDemo placeholder="More" additionalClasses="border-inherit" />
          </div>
        </div>
      </div>
    </div>
  );
}
