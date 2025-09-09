import videoToDoList from "../../assets/to-do-list visualizer/añadir.mp4";
import videoStore from "../../assets/storeSimulator/añadir-empleado.mp4";
import Taller from "../../assets/taller/taller.mp4";
import Estudiantes from "../../assets/estudiantes/añadirEstudiante.mp4";
export const ProyectosData = [
    {
        title: "Página del Taller Mecanico",
        image: "../src/assets/react.svg",
        description: "Sitio web de taller mecánico - Desarrollo completo sin publicación.",
        link: "https://github.com/Christophernr/taller.github.io", //link del proyecto del taller
        video: Taller
    },
    {
        title: "Simulador de Tienda Online",
        image: "../src/assets/react.svg",
        description: "Simulador de tienda en consola hecho en C# con SQL Server y Entity Framework usando Migrations",
        link: "https://github.com/Christophernr/MiniStoreOnlineSimulator",
        video: videoStore //link del proyecto del mini store
    },
    {
        title: "Sistema de Gestión de Registro y Asistencia de Estudiantes",
        image: "../src/assets/react.svg",
        description: "Gestor estudiantil (Windows Forms + ADO.NET + SQL Server)",
        link: "https://github.com/Christophernr/estudiantes",
        video: Estudiantes //link del proyecto de estudiantes con jared
    },
    {
        title: "To-Do List",
        image: "../src/assets/react.svg",
        description: "To-do list en WPF con SQL Server, usando Entity Framework para gestionar tareas.",
        link: "https://github.com/Christophernr/To-do-List", //link del proyecto de to-do list
        video: videoToDoList
    }




]