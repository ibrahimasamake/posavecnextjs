// @flow
import * as React from 'react';
import {PropsWithChildren} from "react";
import {cn} from "@/lib/utils";
import {Section} from "@/components/Section";


export const Sectionmeduin = (props:PropsWithChildren<{className?:string}>) => {
    return (
        <Section className={cn('max-w-6xl mx-auto  ', props.className)}>
            {props.children}
        </Section>
    );
};