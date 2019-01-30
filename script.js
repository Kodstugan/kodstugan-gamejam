
var vm = new Vue({
    el: '#docs',
    data: {
        documentation: [
            {name: "General", api: api_info},
            {name: "Movement", api: api_movement},
            {name: "Event", api: api_events},
            {name: "Gun", api: api_gun},
            {name: "Radar", api: api_radar}
        ]
    }
})
