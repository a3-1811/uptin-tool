let modalManager = {}

const BODY_MODAL = [...document.body.classList,"h-screen", "w-screen", "overflow-hidden"];
const BODY_NORMAL =[...document.body.classList];

const modals = [...document.querySelectorAll(".modal")];

modalManager = modals.reduce((result, ele)=>{
  const toggleId = ele.getAttribute("data-modal-toggle")
  const targetId = ele.getAttribute("data-modal-target")
  const targetElement  = document.getElementById(targetId)
  targetElement.classList.add("hidden");
  result[targetId] = {
    toggleId,
    targetId,
    classes: [...targetElement.classList],
    open: false,
  };
  return result;
},{});

document.addEventListener('click', function(e) {
    if (e?.target?.classList?.contains("modal")){
      openModal(e?.target?.getAttribute("data-modal-target"));
    }else{
      const modalsOpened = Object.keys(modalManager)?.filter(
        (key) => modalManager[key]?.open
      );
      modalsOpened.forEach((targetId) => {
        closeModal(targetId);
      });
    }
}, false);

function removeAndAddClass(element, newClasses=[]){
  element.classList.remove(...element.classList);
  newClasses.forEach((className) => {
    element.classList.add(className);
  });
  return element
}

function openModal(targetId){
  let targetElement  = document.getElementById(targetId)
  targetElement = targetElement.cloneNode(true);
  if(modalManager.hasOwnProperty(targetId) && targetElement){
    let modalEle = document.createElement('div')
    // Use this to remove
    const classModal = `modal_${targetId}`;
    modalEle = removeAndAddClass(modalEle, [
      "absolute",
      "top-0",
      "left-0",
      "w-screen",
      "h-screen",
      classModal,
    ]);

    let outerEle = document.createElement("div");
    outerEle = removeAndAddClass(outerEle,["absolute", "top-0" ,"left-0" ,"w-screen", "h-screen", "bg-black/[.8]"]);

    targetElement.classList.remove('hidden');
    outerEle.appendChild(targetElement);
    modalEle.appendChild(outerEle);
    document.body.appendChild(modalEle);

    removeAndAddClass(document.body, BODY_MODAL);

    modalManager[targetId] = { ...modalManager[targetId] ,open:true};
  }
}

function closeModal(targetId) {
  const targetElement = document.getElementById(targetId);
  if (modalManager.hasOwnProperty(targetId) && targetElement) {
    const classModal = `.modal_${targetId}`;

    const elementsToRemove = document.querySelectorAll(classModal);
    // Iterate over the selected elements and remove each one
    elementsToRemove.forEach((element) => {
      element.remove();
    });
    removeAndAddClass(document.body, BODY_NORMAL);

    modalManager[targetId] = { ...modalManager[targetId], open: false };
  }
}