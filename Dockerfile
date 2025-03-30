# Sử dụng image Node.js LTS
FROM node:18-alpine

# Đặt thư mục làm việc trong container
WORKDIR /app

# Sao chép package.json và package-lock.json
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Sao chép toàn bộ mã nguồn vào container
COPY . .

# Biên dịch mã TypeScript
RUN npm run build

# Lắng nghe trên port 3000
EXPOSE 3000

# Khởi chạy ứng dụng NestJS
CMD ["npm", "run", "start:prod"]
