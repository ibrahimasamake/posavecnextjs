'use client'
// @flow
import * as React from 'react';

import {Specing} from "@/components/Specing";
import {AddProduit} from "@/components/stock/AddProduit";
import {useState} from "react";
import {ListeStock} from "@/components/stock/ListeStock";
import {ListeCathegorieStock} from "@/components/stock/ListeCathegorieStock";
import {Section} from "@/components/Section";

type Props = {

};
export default function  Page(props: Props){


    return (
        <main>
           <AddProduit></AddProduit>
        </main>
    );
};