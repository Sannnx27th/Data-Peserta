kelasData.forEach(kelas => {
   const cardElement = document.createElement("div");
   cardElement.classList.add("card-kelas");

   const header = document.createElement("h2");
   header.textContent = kelas.namaKelas;
   cardElement.appendChild(header);

   const wrapper = document.createElement("div");
   wrapper.classList.add("profil-wrapper");

   kelas.temanTerbaik.forEach(teman => {
      const imgElement = document.createElement("img");
      imgElement.src = teman.gambarProfil;
      imgElement.alt = teman.nama;
      wrapper.appendChild(imgElement);
   });

   cardElement.appendChild(wrapper);
   document.body.appendChild(cardElement);
});