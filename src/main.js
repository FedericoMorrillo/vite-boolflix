import { createApp } from "vue";
import "./scss/general.scss";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faStar as fasStar } from "@fortawesome/free-solid-svg-icons"; //solid
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons"; //regular
library.add(fasStar, farStar);

createApp(App).mount("#app");
