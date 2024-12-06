<Swiper
          modules={[Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop
          style={{ width: "300px", height: "200px" }}
        >
          {animal.Images.map(({img1}, index) => (
            <SwiperSlide key={index}>
              <img
                src={img1}
                alt={`Slide ${index}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>