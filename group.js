const LISTS_GROUPS = [
  {
    name: "real estate",
    members: 328000,
    image: "./images/group/re.png",
  },
  {
    name: "travel & Tour",
    members: 276000,
    image: "./images/group/travel.png",
  },
  {
    name: "jobs & hr",
    members: 356000,
    image: "./images/group/hr.png",
  },
  {
    name: "beauty",
    members: 226000,
    image: "./images/group/beauty.png",
  },
  {
    name: "FOOD & BEVERAGE",
    members: 406000,
    image: "./images/group/food.png",
  },
  {
    name: "fashion",
    members: 519000,
    image: "./images/group/fashion.png",
  },
];

// Append list groups
const carousel1 = document.getElementById("carousel-1");
const carousel2 = document.getElementById("carousel-2");

function fAbbreviate(number, seperator = ",") {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 1,
    notation: "compact",
    compactDisplay: "short",
  })
    .format(number)
    .replace(".", seperator);
}

function getCard(item) {
  return `<div class="shadow-main flex shrink-0 items-center bg-white py-[22px] pl-4 pr-[70px] lg:py-[25px] lg:pl-[26px] lg:pr-[56px]">
  <img
    src="${item.image}"
    alt="avatar"
    class="mr-6 h-16 w-16 rounded-full object-cover lg:mr-5 lg:h-25 lg:w-25"
  />
  <div>
    <p class="mb-[2px] font-oswald text-2xl font-medium uppercase tracking-[1.2px] text-black lg:mb-[6px] lg:text-[32px]">
      ${item.name}
    </p>
    <div class="flex">
      <p class="mr-[10px] font-bold text-black lg:text-[24px]">
        ${fAbbreviate(item.members)} members
      </p>
    </div>
  </div>
</div>`;
}

let innerCardsHTML = "";

for (const item of LISTS_GROUPS) {
  innerCardsHTML += getCard(item);
}

for (const parents of [carousel1, carousel2]) {
  parents.innerHTML = innerCardsHTML;
}
