AFRAME.registerComponent("comic", {
  init: function () {
    this.placesContainer = this.el;
    
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "ghumundi-man",
        title: "bukwas-man",
        url: "./assets/superman-poster.jpg",
      },
      {
        id: "spooder-man",
        title: "mukdi-man",
        url: "./assets/spiderman-poster.jpg",
      },

      {
        id: "aeroplane-man",
        title: "hawaijhach-man",
        url: "./assets/captain-aero-banner.jpg",
      },
      {
        id: "gswnmcbaiiaw",
        title: "glorios-space-which-no-man-can-be-as-it-is-a-weakling",
        url: "./assets/outer-space-poster.jpg",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      const borderEl =  this.cb(position,item.id)
      const thumbnail = this.ct(item)
      this.borderEl.appendChild(thumbnail)
      const textEl = this.cte(item,position)
      this.borderEl.appendChild(textEl)

      this.placesContainer.appendChild(borderEl);
    }
  },
  cb: function(position,id){
    const entityEl = document.createElement("a-entity")
    entityEl.setAttribute("id",id)
    entityEl.setAttribute("visible",true)
    entityEl.setAttribute("geometry",{
      primitive:"ring",
      radiusInner:9,
      radiusOuter:10
    })
    entityEl.setAttribute("material",{
      color:"pink",
      opacity:0.5
    })
    entityEl.setAttribute("position",position)

    return entityEl
  },
  ct: function(item){
    const entityEl = document.createElement("a-entity")
    entityEl.setAttribute("visible",true)
    entityEl.setAttribute("geometry",{
      primitive:"circle",
      radius:9
    })
    entityEl.setAttribute("material",{src:item.url})

    return entityEl
  },
  cte: function(item,position){
    const entityEl = document.createElement("a-entity")
    entityEl.setAttribute("visible",true)
    entityEl.setAttribute("text",{
      font:"exo2bold",
      align:"center",
      color:"black",
      value:item.title
    })

    const p = position
    p.y=-20
    entityEl.setAttribute("position",p)

    return entityEl
  }
  
});
