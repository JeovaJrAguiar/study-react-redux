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

export default () => (
    <div className="App">
        <h1>React Fundamentals</h1>

        <div className="Cards">
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