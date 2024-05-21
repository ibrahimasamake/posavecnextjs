// @flow
import * as React from 'react';
import {cn} from "@/lib/utils";

type Props = {
    size?: 'sm' | 'md' | 'lg';
};
export const Specing = ({size='md'}: Props) => {
    return (
        <div className={
            cn(
                {
                    'h-8 lg:h-16':size==='sm',
                    'h-16 lg:h-24':size==='md',
                    'h-24 lg:h-48':size==='lg',
                }
            )
        }>

        </div>
    );
};