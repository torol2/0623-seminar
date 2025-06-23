import Swal from 'sweetalert2'

document.getElementById("danger-button").addEventListener("click", () => {
  Swal.fire({
    icon: 'warning',
    title: '클릭하지 마세요!',
    text: '분명히 누르지 말라고 했잖아요 😠',
    confirmButtonText: '죄송합니다...',
    background: '#1b263b',
    color: '#e0e1dd',
    confirmButtonColor: '#778da9'
  });
});
