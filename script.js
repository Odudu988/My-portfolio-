 const toogleBtn = 
 document.getElementById("theme");
 let isDark = false;

 toogleBtn.addEventListener("click",
    () => {
        isDark = !isDark;

        document.documentElement.style.setProperty("--bg-color", isDark ? "#121212" : "#fff");
        document.documentElement.style.setProperty("--text-color", isDark ? "#fff" : "000");
        document.documentElement.style.setProperty("--primary-color", isDark ? "#bb86fc" : "0077ff");
        toogleBtn.textContent = isDark ? "\u2600" : "\u1f319";
 });