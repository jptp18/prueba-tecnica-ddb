const animate = () => {

    //Timeline para darle orden a las animaciones
    const tl = gsap.timeline();

    //Animaciones
    tl.from(".banner",{ 
        duration: 1,
        scale: 0.5, 
        opacity: 0, 
        delay: 0.5, 
        stagger: 0.2,
        ease: "elastic", 
    });

    tl.from(".logo",{
        duration: 1, 
        ease: "sine.in", 
        x: -600  
    });

    tl.from(".title",{ 
        duration: 1, 
        ease: "power1.in", 
        y: -600
    });

    tl.from(".subtitle",{ 
        duration: 1, 
        ease: "power1.in", 
        y: -600  
    });

    tl.from(".button",{ 
        duration: 1.5, 
        ease: "bounce.inOut", 
        y: -600
    });


};
  
  animate();