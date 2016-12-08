import { Routes, RouterModule } from "@angular/router";
import { MynoteComponent } from "./components/mynote/mynote.component";
import { AboutComponent } from "./components/about/about.component";

const routes: Routes = [
	{
		path: "",
		component: MynoteComponent
	},
	{
		path: "about",
		component: AboutComponent
	}
];

export const routing = RouterModule.forRoot(routes);