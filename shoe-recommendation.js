
<script>
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
    }
  ];

  function recommendShoes() {
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
  }
</script>
