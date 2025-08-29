const allSection = document.getElementById("all-section");
const coine = document.getElementById("coine");
const heardCounter = document.getElementById("heard");
const copeCounter = document.getElementById("copeBtn");
const history = document.getElementById("histroy");
const clearBtn = document.getElementById("clear-btn");

let love = 1;
let copeBtn = 1;

allSection.addEventListener("click", function (e) {
    const target = e.target;

    // HEART CLICK
    if (target.classList.contains("fa-heart")) {
        heardCounter.innerText = love++;
    }

    // COPY CLICK
    if (
        target.classList.contains("copeBtn-all") ||
        target.parentNode.classList.contains("copeBtn-all")
    ) {
        copeCounter.innerText = copeBtn++;

        // Navigate to the card div
        let card = target;
        while (!card.classList.contains("copy-all-btn")) {
            card = card.parentNode;
            if (!card) return;
        }

        const numberEl = card.getElementsByTagName("h4")[0];
        if (numberEl) {
            alert(`The number has been copied: ${numberEl.innerText}`);
            navigator.clipboard.writeText(numberEl.innerText);
        }
    }

    // CALL CLICK
    if (
        target.classList.contains("call-btn") ||
        target.parentNode.classList.contains("call-btn")
    ) {
        // Navigate to the card div
        let card = target;
        while (!card.classList.contains("copy-all-btn")) {
            card = card.parentNode;
            if (!card) return;
        }

        const numberEl = card.getElementsByTagName("h4")[0];
        const hintoryCode = card.getElementsByTagName("p")[0];

        if (Number(coine.innerText) <= 0) {
            alert("❌ Not enough coins to make a call!");
            return;
        }
        coine.innerText = Number(coine.innerText) - 20;

        const date1 = new Date();
        let hours = date1.getHours();
        const minutes = date1.getMinutes().toString().padStart(2, "0");
        const seconds = date1.getSeconds().toString().padStart(2, "0");
        const ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;

        const div = document.createElement("div");
        div.innerHTML = `
      <div class="flex justify-between items-center w-full mb-4 rounded-md p-4 mt-4 shadow-md">
        <div>
          <h3 class='text-xl font-medium'>${hintoryCode.innerText}</h3>
          <p class='mt-2 font-medium'>${numberEl.innerText}</p>
        </div>
        <div>
          <h4>${hours}:${minutes}:${seconds} ${ampm}</h4>
        </div>
      </div>
    `;
        history.appendChild(div);

        alert(`📞 Calling ${hintoryCode.innerText} - ${numberEl.innerText}`);
    }
});

// CLEAR HISTORY
clearBtn.addEventListener("click", function () {
    history.innerHTML = "";
});