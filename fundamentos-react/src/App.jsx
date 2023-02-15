import React from "react";
import Primeiro from './components/basics/Primeiro'
import WithParameter from './components/basics/WithParameter'
import Random from "./components/basics/Random";
import Card from "./components/layout/Card";
import "./App.css";
import Family from "./components/basics/Family";
import FamilyMember from "./components/basics/FamilyMember";

export default _ =>
    <div className="App">
        <h1>React Fundamentals</h1>
        <div className="Cards">
            <Card title="#05 - Child Component" color="#FF5733">
                <Family lastname="Aguiar">
                    <FamilyMember name="Jeová"/><br />
                    {/*
                    <FamilyMember name="Beatriz" /><br />
                    <FamilyMember name="Marcos" /><br />
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