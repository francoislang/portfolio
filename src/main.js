import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "./index.css";

// fontawesome imports -------------------------------------------------------------------------------------------------
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fas, fab, far);

createApp(App).component("fa", FontAwesomeIcon).mount("#app");
