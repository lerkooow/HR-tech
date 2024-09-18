import * as React from "react";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";

interface SelectProps {
  placeholder?: string;
  additionalClasses?: string;
}

export function SelectDemo({ placeholder, additionalClasses = "" }: SelectProps) {
  return (
    <Select>
      <SelectTrigger className={`${additionalClasses}`}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
    </Select>
  );
}
