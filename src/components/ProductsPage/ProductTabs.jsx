import React, { useState } from "react";
import Typography from "../Typography";
import ButtonIcon from "./ButtonIcon";

// images
import packaging from "../../assets/products/packaging.png";

// icons
import CassavaWhiteIcon from "../../assets/icons/cassava_whiteic.png";
import CassavaBlackIcon from "../../assets/icons/cassava_blackic.png";
import CassavaPowWhiteIcon from "../../assets/icons/cassavapowder_whiteic.png";
import CassavaPowBlackIcon from "../../assets/icons/cassavapowder_blackic.png";
import WheatWhiteIcon from "../../assets/icons/wheat_whiteic.png";
import WheatBlackIcon from "../../assets/icons/wheat_blackic.png";
import WheatPowWhiteIcon from "../../assets/icons/wheatpowder_whiteic.png";
import WheatPowBlackIcon from "../../assets/icons/wheatpowder_blackic.png";

const ProductTabs = () => {
  // State to keep track of the currently active tab
  const [activeTab, setActiveTab] = useState("tab-1");

  // Function to handle tab click
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const picture = [{ src: packaging }];

  const icons = [
    { icon1: CassavaWhiteIcon, icon2: CassavaBlackIcon, tabId: "tab-1" },
    { icon1: CassavaPowWhiteIcon, icon2: CassavaPowBlackIcon, tabId: "tab-2" },
    { icon1: WheatWhiteIcon, icon2: WheatBlackIcon, tabId: "tab-3" },
    { icon1: WheatPowWhiteIcon, icon2: WheatPowBlackIcon, tabId: "tab-4" },
  ];

  return (
    <div className="flex flex-wrap md:flex-nowrap">
      {/* 1 product circle */}
      <div className="px-20">
        <div
          style={{
            position: "relative",
            width: "300px",
            height: "300px",
            display: "grid",
            gridTemplateRows: "1fr 1fr",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={picture[0].src}
            alt="Central"
            style={{
              width: "80%",
              gridColumn: "1 / 3",
              gridRow: "2 / 3",
              justifySelf: "center",
              alignSelf: "center",
            }}
          />
          {icons.map((item, index) => (
            <ButtonIcon
              key={index}
              icon1={item.icon1}
              icon2={item.icon2}
              width={60}
              active={activeTab === item.tabId}
              onClick={() => handleTabClick(item.tabId)} // Update tab on icon click
              style={{
                width: "50px",
                height: "50px",
                justifySelf: index % 2 === 0 ? "start" : "end",
                alignSelf: index < 2 ? "start" : "end",
              }}
              src={activeTab === item.tabId ? item.icon2 : item.icon1} // Switch icon based on activeTab
            />
          ))}
        </div>
      </div>

      {/* 2 tabs */}
      <div className="flex-wrap mt-20 md:flex-no-wrap md:mt-0">
        {/* tabs */}
        <div
          role="tablist"
          aria-label="tabs"
          className="flex flex-wrap mx-10 gap-5 grid-cols-4 rounded-full"
        >
          {icons.map((item, index) => (
            <button
              key={index}
              role="tab"
              aria-selected={activeTab === item.tabId}
              aria-controls={`panel-${index + 1}`}
              id={item.tabId}
              tabIndex={activeTab === item.tabId ? "0" : "-1"}
              className={`relative block h-10 px-6 tab rounded-full ${
                activeTab === item.tabId
                  ? "bg-black text-white"
                  : "bg-lightgray text-black"
              }`}
              onClick={() => handleTabClick(item.tabId)}
            >
              <span className="text-gray-800">
                {item.tabId === "tab-1"
                  ? "TẤM GẠO"
                  : item.tabId === "tab-2"
                  ? "BÃ MÌ"
                  : item.tabId === "tab-3"
                  ? "CÁM GẠO"
                  : "KHOAI MÌ LÁT"}
              </span>
            </button>
          ))}
        </div>

        {/* panel */}
        <div className="mx-16 mt-10 md:w-3/4">
          {activeTab === "tab-1" && (
            <div role="tabpanel" id="panel-1" className="tab-panel">
              <Typography variant="h4" className="text-black mt-5">
                TẤM GẠO
              </Typography>
              <p className="mt-4">
                Tấm gạo là phần hạt gạo bị vỡ trong quá trình xay xát, có giá
                trị dinh dưỡng tương đương với gạo nguyên hạt. Tấm gạo thường
                được sử dụng làm nguyên liệu cho các ngành công nghiệp như sản
                xuất thức ăn chăn nuôi, chế biến thực phẩm, và sản xuất bia. Nhờ
                hàm lượng dinh dưỡng cao và giá thành phải chăng, tấm gạo là lựa
                chọn lý tưởng để bổ sung vào khẩu phần thức ăn gia súc, gia cầm,
                giúp tăng cường sức khỏe và hiệu quả sản xuất chăn nuôi.
              </p>
            </div>
          )}
          {activeTab === "tab-2" && (
            <div role="tabpanel" id="panel-2" className="tab-panel">
              <Typography variant="h4" className="text-black mt-5">
                BÃ MÌ
              </Typography>
              <p className="mt-4">
                Bã khoai mì, hay bã sắn, là phụ phẩm từ quá trình chiết xuất
                tinh bột tại nhà máy. Trung bình, mỗi ngày một nhà máy sản xuất
                100 tấn tinh bột khô sẽ tạo ra khoảng 30-40 tấn bã mì tươi. Bã
                này sau đó được xử lý, sấy khô, loại bỏ độc tố và dự trữ để phục
                vụ nhiều ngành công nghiệp như sản xuất thức ăn chăn nuôi,
                Ethanol, cồn, axit nitric, và men vi sinh. Trong đó, việc dùng
                bã khoai mì làm thức ăn chăn nuôi là phổ biến nhất.
                <Typography variant="body" className="text-black mt-5">
                  Chỉ Tiêu Chất Lượng
                </Typography>
                Độ ẩm (max): 14%
                <br />
                Gluten ướt (min): 32% Protein thô (min): 10,5% Tro thô (max): 1%
                <br />
                Sản phẩm không chứa kháng sinh, hóa chất, chất cấm
                <br />
                Công dụng: Sử dụng trong sản xuất thức ăn chăn nuôi, thủy sản Sử
                dụng theo công thức nhà sản xuất
              </p>
            </div>
          )}
          {activeTab === "tab-3" && (
            <div role="tabpanel" id="panel-3" className="tab-panel">
              <Typography variant="h4" className="text-black mt-5">
                CÁM GẠO
              </Typography>
              <p className="mt-4 text-gray-600">
                Cám gạo là lớp vỏ ngoài của hạt gạo, được tách ra trong quá
                trình xay xát. Đây là sản phẩm giàu dinh dưỡng với hàm lượng
                protein, chất béo và khoáng chất cao. Cám gạo thường được sử
                dụng rộng rãi trong ngành công nghiệp sản xuất thức ăn chăn
                nuôi, đặc biệt là cho gia súc và gia cầm, nhờ vào khả năng cung
                cấp năng lượng và dinh dưỡng tối ưu. Ngoài ra, cám gạo còn được
                ứng dụng trong sản xuất thực phẩm chức năng, mỹ phẩm, và các sản
                phẩm dưỡng da nhờ vào đặc tính chống oxy hóa và làm đẹp tự
                nhiên.
              </p>
            </div>
          )}
          {activeTab === "tab-4" && (
            <div role="tabpanel" id="panel-4" className="tab-panel">
              <Typography variant="h4" className="text-black mt-5">
                KHOAI MÌ LÁT
              </Typography>
              <p className="mt-4 text-gray-600">
                Khoai Mì Lát từ Việt Nam đã và đang khẳng định vị thế trên thị
                trường quốc tế, được ứng dụng rộng rãi trong sản xuất thức ăn
                gia súc.
                <br />
                Hưng Long Miền Tây đặc biệt chú trọng đến việc bảo quản và lựa
                chọn sản phẩm kỹ lưỡng, đảm bảo không bị mối mọt hay sâu bệnh,
                giúp khoai mì lát của chúng tôi luôn đạt chuẩn sản xuất.
                <br />
                Nếu Quý doanh nghiệp có nhu cầu, xin vui lòng liên hệ để nhận
                báo giá tốt nhất và các thông tin chi tiết.
                <br />
                <Typography variant="body" className="text-black mt-5">
                  Chỉ Tiêu Chất Lượng
                </Typography>
                Moisture : 14.5 % max
                <br />
                Starch : 70% min Fiber : 5% max
                <br />
                Sand / silica : 3% max
                <br />
                Packing : around 40 kgs/pp bag
                <br />
                Loading : 27 mts in 1x40’HQ
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductTabs;
