// @flow
import * as React from 'react';
import {PropsWithChildren} from "react";
import {cn} from "@/lib/utils";

export const Section = (props: PropsWithChildren<{className?:string}>) => {
    return (
        <div className={cn('max-w-full mx-auto  px-3 py-1   ',props.className)}>{props.children}</div>
    );
};