import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "../../lib/utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Controller } from "react-hook-form";

const SelectField = ({
  name,
  label,
  placeholder,
  options,
  control,
  error,
  required = false,
}: SelectFieldProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="form-label">
        {label}
      </Label>
      <Controller
        name={name}
        control={control}
        rules={{
          required: required
            ? `${label.toLocaleLowerCase()} is required`
            : false,
        }}
        render={({ field }) => (
          <Select value={field.value} onValueChange={field.onChange}>
            <SelectTrigger className="select-trigger w-full">
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-600 text-white">
              <SelectGroup>
                {options.map((option) => (
                  <SelectItem
                    key={option.value}
                    value={option.value}
                    className="focus:bg-gray-600 focus:text-yellow-400"
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        )}
      />
      {error && (
        <p className="text-sm text-red-500 mt-1 ml-2">{error.message}</p>
      )}
    </div>
  );
};

export default SelectField;
