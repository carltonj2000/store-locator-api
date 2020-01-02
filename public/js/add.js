const storeForm = document.getElementById("store-form");
const storeId = document.getElementById("store-id");
const storeAddress = document.getElementById("store-address");

function addStore(e) {
  e.preventDefault();
  if (storeId.value === "" || storeAddress.value === "")
    alert("Please fill in fields");

  const sendBody = {
    storeId: storeId.value,
    address: storeAddress.value
  };

  try {
    const res = fetch("/api/v1/stores", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sendBody)
    });
    if (res.status !== 200) throw Error("Error");
    window.location.href = "/index.html";
  } catch (error) {
    console.log("Fetch Store Error:", error);
  }
}
storeForm.addEventListener("submit", addStore);
