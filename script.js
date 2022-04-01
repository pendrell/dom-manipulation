const container = document.querySelector("#container");
        const content = document.createElement("div");
        content.classList.add("content");
        container.appendChild(content);

        
        const redParagraph = document.createElement("p");
        redParagraph.classList.add("redParagraph");
        redParagraph.textContent = "Hey I'm red!";
        redParagraph.style.color = "red";
        content.appendChild(redParagraph);
        const blueHeader = document.createElement("h3");    
        blueHeader.classList.add("blueHeader");
        blueHeader.textContent = "I'm blue dabadee";
        blueHeader.style.color = "blue";
        content.appendChild(blueHeader);
        
        
        
        
        const pinkBox = document.createElement("div");
        pinkBox.classList.add("pinkBox");
        pinkBox.style.backgroundColor = "pink";
        pinkBox.style.border = "2px solid black";
        pinkBox.style.width = "50px";
        pinkBox.style.height = "50px";
        
        const pinkBoxHeader = document.createElement("h1");
        pinkBoxHeader.textContent = "I'm in a div";
        content.appendChild(pinkBoxHeader);
        const secondPara = document.createElement("p");
        secondPara.classList.add("secondPara");
        secondPara.textContent("ME TOO!");
        content.appendChild(secondPara);
        content.appendChild(pinkBox)
        


