import React from "react";
import Typography from "./Typography";

// images
import uploadic from "./../assets/btn_icons/uploadic.png";

const ContactUs = () => {
  const picture = [{ src: uploadic }];
  return (
    <div className="relative w-1/2 p-5 z-10 h-full">
      {/* <div className="bg-darkGreen h-1 rounded-full "></div> */}
      <div className="bg-white">
        <Typography variant="h3" className="text-black mt-10">
          Liên hệ với chúng tôi
        </Typography>
        <Typography variant="body" className="text-black mt-5">
          Vui lòng điền thông tin vào biểu mẫu liên hệ để chúng tôi có thể phản
          hồi trong vòng 2 ngày làm việc. Hoặc liên hệ trực tiếp qua email{" "}
          <span className="font-bold">hunglongmientay@email.com</span>.
        </Typography>
        <form class="mt-8 space-y-4">
          <div>
            <label for="contact-name" class="block text-gray-700">
              Tên liên hệ*
            </label>
            <input
              type="text"
              id="contact-name"
              name="contact-name"
              className="mt-1 w-full px-4 py-2 border rounded-md"
            />
          </div>

          <div class="flex space-x-4">
            <div class="w-1/2">
              <label for="phone" class="block text-gray-700">
                Số điện thoại
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                class="mt-1 w-full px-4 py-2 border rounded-md"
              />
            </div>
            <div class="w-1/2">
              <label for="email" class="block text-gray-700">
                Email*
              </label>
              <input
                type="text"
                id="email"
                name="email"
                class="mt-1 w-full px-4 py-2 border rounded-md"
              />
            </div>
          </div>
          <div>
            <label for="subject" class="block text-gray-700">
              Chủ đề*
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              class="mt-1 w-full px-4 py-2 border rounded-md"
            />
          </div>
          <div>
            <label for="message" class="block text-gray-700">
              Nội dung*
            </label>
            <textarea
              id="message"
              name="message"
              rows="8"
              class="mt-1 w-full px-4 py-2 border rounded-md"
            ></textarea>
          </div>
          <div>
            <label for="file-upload" class="block text-gray-700">
              Tệp bổ sung
            </label>
            <div class="w-full mx-auto mt-2">
              <div class="border-2 border-dashed border-greyShadow p-6 text-center cursor-pointer">
                <input type="file" id="file-upload" class="hidden" />
                <label
                  for="file-upload"
                  class="flex gap-2 items-center justify-center h-10"
                >
                  <img src={picture[0].src} alt="upload_icon" />
                  <span class="text-greyShadow">Tải lên tệp bổ sung</span>
                </label>
              </div>
              <p class="mt-2 text-sm text-greyShadow text-center">
                Kích thước tệp của bạn không được vượt quá 10MB
              </p>
            </div>
          </div>
          <div class="flex items-center mt-4">
            <input
              type="checkbox"
              id="nda"
              name="nda"
              class="h-4 w-4 text-teal-500 focus:ring-teal-500 border-gray-300 rounded"
            />
            <label for="nda" class="ml-2 block text-gray-700">
              Tôi muốn dữ liệu của mình được bảo mật
            </label>
          </div>
          <button
            type="submit"
            class="mt-4 w-full bg-darkGreen text-white py-2 px-4 rounded-md hover:bg-primaryGreen"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
