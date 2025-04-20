
const shoeDB = [
  {
    sku: "asics-nimbus-26",
    name: "ASICS Gel-Nimbus 26",
    brand: "ASICS",
    goal: ["easy"],
    feel: ["soft"],
    foot: ["neutral"],
    budget: "high",
    surface: ["road"],
    weightMin: 60,
    weightMax: 120,
    strike: ["heel"],
    hasWide: true,
    link: "https://www.asics.com/vn/vi-vn/gel-nimbus-26"
  },
  {
    sku: "nike-vaporfly-3",
    name: "Nike Vaporfly Next% 3",
    brand: "Nike",
    goal: ["race"],
    feel: ["springy"],
    foot: ["neutral"],
    budget: "high",
    surface: ["road"],
    weightMin: 50,
    weightMax: 90,
    strike: ["forefoot", "midfoot"],
    hasWide: false,
    link: "https://www.nike.com/vn/t/vaporfly-next-3-racing-shoes"
  },
  {
    sku: "hoka-clifton-9",
    name: "Hoka Clifton 9",
    brand: "Hoka",
    goal: ["easy", "longrun"],
    feel: ["soft"],
    foot: ["neutral", "high"],
    budget: "high",
    surface: ["road", "mix"],
    weightMin: 0,
    weightMax: 100,
    strike: ["heel", "midfoot"],
    hasWide: true,
    link: "https://www.hoka.com/vn/en/clifton-9"
  },
  {
    sku: "brooks-ghost-15",
    name: "Brooks Ghost 15",
    brand: "Brooks",
    goal: ["easy"],
    feel: ["responsive"],
    foot: ["neutral", "flat"],
    budget: "mid",
    surface: ["road"],
    weightMin: 55,
    weightMax: 110,
    strike: ["heel", "midfoot"],
    hasWide: true,
    link: "https://www.brooksrunning.com/en_us/ghost-15-mens-running-shoe/110393.html"
  },
  {
    sku: "altra-torin-7",
    name: "Altra Torin 7",
    brand: "Altra",
    goal: ["easy"],
    feel: ["natural", "soft"],
    foot: ["neutral", "high"],
    budget: "mid",
    surface: ["road"],
    weightMin: 45,
    weightMax: 100,
    strike: ["midfoot"],
    hasWide: true,
    link: "https://www.altrarunning.com/shop/men/shoes/torin-7.html"
  }
];

window.recommendShoes = function () {
  const goal = document.getElementById("goal").value;
  const foot = document.getElementById("foot").value;
  const strike = document.getElementById("strike").value;
  const weight = parseInt(document.getElementById("weight").value);
  const feel = document.getElementById("feel").value;
  const surface = document.getElementById("surface").value;
  const footwidth = document.getElementById("footwidth").value;

  const matches = shoeDB.filter(shoe =>
    shoe.brand !== "New Balance" &&
    shoe.goal.includes(goal) &&
    shoe.feel.includes(feel) &&
    shoe.foot.includes(foot) &&
    shoe.surface.includes(surface) &&
    shoe.weightMin <= weight &&
    shoe.weightMax >= weight &&
    shoe.strike.includes(strike) &&
    (footwidth !== "wide" || shoe.hasWide === true)
  );

  let result = "<h3>📌 Gợi ý dành cho bạn:</h3>";

  if (matches.length > 0) {
    matches.forEach(shoe => {
      result += `
        <div class="card">
          <h4>${shoe.name}</h4>
          <p>🎯 Phù hợp mục tiêu: ${goal}</p>
          <p>🔧 Cảm giác chạy: ${feel}</p>
          <p>👣 Dạng chân: ${foot}</p>
          <a href="${shoe.link}" target="_blank">Xem chi tiết sản phẩm</a>
        </div>`;
    });

    if (footwidth === "wide") {
      result += "<p>✅ Bạn nên chọn giày có bản Wide hoặc toe box rộng để tránh cấn/hẹp khi chạy.</p>";
    }
  } else {
    result += "<p>⚠️ Không tìm thấy đôi giày phù hợp với tiêu chí bạn chọn.</p>";
  }

  document.getElementById("result").innerHTML = result;
};
