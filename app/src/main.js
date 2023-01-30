import App from './App.vue'
import About from "./components/About.vue";
import Education from "./components/Education.vue";
import Experience from "./components/Experience.vue";
import Main from "./components/Main.vue";
import Skills from "./components/Skills.vue";
import MainSkills from "./components/skills/MainSkills.vue";
import Game from "./components/skills/Game.vue";
import InfinityJump from "./components/skills/InfinityJump.vue";
import Publications from "./components/Publications.vue";
import Plinko from "./components/skills/Plinko.vue";
import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from "vue-router";
import './styles.css'

const routes = [
	{
		path: "/", name: "app", component: App, children: [
			{ path: "/", component: About },
			{ path: "/about", name: "about", component: About },
			{ path: "/experience", name: "experience", component: Experience },
			{ path: "/education", name: "education", component: Education },
			{
				path: "/skills", name: "skills", component: Skills, children: [
					{ path: "", component: MainSkills },
					{ path: "game", name: "game", component: Game },
					{ path: "jump", name: "jump", component: InfinityJump },
					{ path: "plinko", name: "plinko", component: Plinko }
				]
			},
			{
				path: "/publications", name: "publications", component: Publications
			}
		]
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

const app = createApp(Main);
app.use(router);
app.mount('#app');