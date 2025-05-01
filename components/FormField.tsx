import React from 'react'
import {FormControl, FormDescription, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Controller, FieldValues, Path, Control} from "react-hook-form";

interface FormFieldProps<T extends fieldValues> {
    control: Control<T>;
    name: Path<T>;
    label: string;
    placeholder?: string;
    type?: 'text' | 'email' | 'password' | 'file'
}

const FormField = ({ control, name , label , placeholder, type="text"} : FormFieldProps<T>) => (

    <Controller
        control={control}
        name={name}
        render={({ field }) => (
            <FormItem>
            <FormLabel className="label">{label}</FormLabel>
            <FormControl>
                <Input
                    className="input"
                    placeholder={placeholder}
                    type={type}

                    {...field}
                />
            </FormControl>
            <FormMessage />
            </FormItem>
    )}

    />
);
export default FormField
