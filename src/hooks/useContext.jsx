import { useContext } from "react";
// Importa el contexto AppContext desde otro archivo (probablemente un contexto de React).
import { AppContext } from "../context/Context";

// Defino una función llamada useAppContext que es un hook personalizado.
export const useAppContext = () => {
    // Utiliza el hook useContext para obtener el contexto de AppContext.
    const context = useContext(AppContext);

    // Verifica si el contexto es nulo.
    if (!context) {
        // Si el contexto es nulo, lanza un error indicando que useAppContext debe utilizarse dentro de un proveedor AppContext.
        throw new Error("useAppContext debe usarse dentro de un proveedor AppContext");
    }

    // Devuelve el contexto obtenido.
    return context;
}