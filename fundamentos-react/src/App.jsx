import React from "react";

import './App.css';

import Primeiro from './components/basics/Primeiro'
import WithParameter from './components/basics/WithParameter'
import Random from "./components/basics/Random";
import Card from "./components/layout/Card";
import Family from "./components/basics/Family";
import FamilyMember from "./components/basics/FamilyMember";
import StudentList from "./components/repetion/StudentList";
import ProductsTable from "./components/repetion/ProductsTable";
import ParOrImpar from "./components/conditional/ParOrImpar";
import UserInfo from "./components/conditional/UserInfo";
import DirectFather from "./components/comunication/DirectFather";
import IndirectFather from "./components/comunication/IndirectFather";
import Input from "./components/form/Input";

export default () => (
    <div className="App">
        <h1>React Fundamentals</h1>

        <div className="Cards">
            <Card title="#11 - Controlled Component" color="#E45F56" >
                <Input />
            </Card>

            <Card title="#10 - Indirect Comunication" color="#8BAD39" >
                <IndirectFather />
            </Card>

            <Card title="#09 - Direct Comunication" color="#59323C" >
                <DirectFather />
            </Card>

            <Card title="#08 - Conditional Renderazation" color="#982395" >
                <ParOrImpar number={20} />
                <UserInfo user={{ name: 'Fernando' }} />
                <UserInfo user={{ mail: 'fernando@gmail.com' }} />
            </Card>

            <Card title="#07 - Product List" color="#3A9AD9" >
                <ProductsTable />
            </Card>

            <Card title="#06 - Student List" color="#FF4C65" >
                <StudentList />
            </Card>

            <Card title="#05 - Child Component" color="#FF5733">
                <Family lastname="Ferreira">
                    <FamilyMember name="Anna" />
                    {/*<FamilyMember name="Beatriz" />
                    <FamilyMember name="Carla" />
                    */}
                </Family>

            </Card>
            <Card title="#03 - Random number" color="#581845" >
                <Random max={60} min={1} />
            </Card>
            <Card title="#02 - With Parameter" color="#900C3F">
                <WithParameter
                    titulo="titulo parametro"
                    subtitulo="very good" />
            </Card>
            <Card title="#01 - Fist Component" color="#C70039">
                <Primeiro />
            </Card>
        </div>
    </div>
)