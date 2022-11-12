
self.addEventListener("install", ()=>{
console.log("SW", "Instalando");
});

self.addEventListener("activate", () => {
  console.log("SW", "Activando");
});

self.addEventListener("fetch", (evt) => {
  console.log("SW", "Fetch");
  console.log("SW", evt);
  console.log("SW", evt.request.url);
});