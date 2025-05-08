import Swal from 'sweetalert2';

export const alert1 = () => {
    Swal.fire({
  title: "Continue reading!",
  width: 600,
  padding: "3em",
  color: "#716add",
  background: "#fff url(/images/trees.png)",
  backdrop: `
    rgba(0,0,123,0.4)
    url("/images/nyan-cat.gif")
    left top
    no-repeat
  `
});
}

export const alert2 = () => {
    Swal.fire({
  title: "Submit your Github username",
  input: "text",
  inputAttributes: {
    autocapitalize: "off"
  },
  showCancelButton: true,
  confirmButtonText: "Look up",
  showLoaderOnConfirm: true,
  preConfirm: async (login) => {
    try {
      const githubUrl = `
        https://api.github.com/users/${login}
      `;
      const response = await fetch(githubUrl);
      if (!response.ok) {
        return Swal.showValidationMessage(`
          ${JSON.stringify(await response.json())}
        `);
      }
      return response.json();
    } catch (error) {
      Swal.showValidationMessage(`
        Request failed: ${error}
      `);
    }
  },
  allowOutsideClick: () => !Swal.isLoading()
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: `WELCOME!, ${result.value.login}`,
      imageUrl: result.value.avatar_url
    });
  }
});
}

export const alert3 = () => {
    Swal.fire("You did already request access");
}

export const alert4 = () => {
  
Swal.fire({
  title: "OMG",
  text: "How many times do I have to repeat it to you",
  icon: "question"
});
}

export const alert5 = () => {
    Swal.fire({
  title: "Thank you! We'll keep you posted",
  icon: "success",
  draggable: true
});
}