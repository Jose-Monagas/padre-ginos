import { useState } from "react";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import PizzaOfTheDay from "../PizzaOfTheDay";
import Header from "../Header";
import { CartContext } from "../contexts";

export const Route = createRootRoute({
    component: () => {
        const cartHook = useState([]);
        return (
            <>
                <CartContext.Provider value={cartHook}>
                    <div>
                        <Header />
                        <Outlet />
                        <PizzaOfTheDay />
                    </div>
                </CartContext.Provider>
                <TanStackRouterDevtools />
            </>
        );
    },
});

//  Outlet component represents the area where different page components will be swapped out and rendered when navigating between routes
