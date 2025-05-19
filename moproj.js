document.addEventListener('DOMContentLoaded', function() {
    function createModal() {
        const modalHTML = `
            <div id="mailPopupModal" class="popup-modal">
                <div class="modal-content">
                    <span class="close-button">&times;</span>
                    <h2 class="modal-title">Keeping track of hundreds of components website</h2>
                    <div class="modal-tags">
                        <span class="modal-tag">HTML</span>
                        <span class="modal-tag">Bootstrap</span>
                        <span class="modal-tag">Ruby on rails</span>
                    </div>
                    <div class="modal-body">
                        <div class="modal-image">
                            <img src="Snapshoot Portfolio.svg" alt="Project screenshot" id="modalImage">
                        </div>
                        <div class="modal-description">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.</p>
                            <div class="modal-buttons">
                                <a href="#" class="modal-button see-live">See live<img src="external-link.svg"></a>
                                <a href="#" class="modal-button see-source">See source<img src="github.svg"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        const modalCSS = `
            .popup-modal {
                display: none;
                position: fixed;
                z-index: 1000;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                overflow: auto;
                background-color: rgba(0, 0, 0, 0.7);
                opacity: 0;
                transition: opacity 0.3s ease;
            }
            
            .popup-modal.show {
                opacity: 1;
            }
            
            .modal-content {
                background-color: white;
                margin: 5% auto;
                padding: 30px;
                width: 90%;
                max-width: 1000px;
                position: relative;
                max-height: 90vh;
                overflow-y: auto;
            }
            
            .close-button {
                position: absolute;
                right: 20px;
                top: 20px;
                color: #666;
                font-size: 28px;
                font-weight: bold;
                cursor: pointer;
                transition: color 0.3s ease;
            }
            
            .close-button:hover {
                color: #FF6B00;
            }
            
            .modal-title {
                font-size: 32px;
                margin-bottom: 20px;
                font-family: 'Crete Round', serif;
                color: #091E42;
            }
            
            .modal-tags {
                display: flex;
                gap: 12px;
                margin-bottom: 30px;
                flex-wrap: wrap;
            }
            
            .modal-tag {
                background-color: #FFFFFF;
                color: #091E42;
                padding: 8px 12px;
                border: solid 1px #8993A4;
                font-size: 15px;
            }
            
            .modal-body {
                display: flex;
                flex-direction: column;
                gap: 30px;
            }
            
            @media (min-width: 768px) {
                .modal-body {
                    flex-direction: row;
                }
            }
            
            .modal-image {
                flex: 1;
            }
            
            .modal-image img {
                width: 100%;
                height: auto;
                border-radius: 8px;
            }
            
            .modal-description {
                flex: 1;
                display: flex;
                flex-direction: column;
            }
            
            .modal-description p {
                margin-bottom: 20px;
                line-height: 1.6;
                color: #091E42;
            }
            
            .modal-buttons {
                display: flex;
                gap: 20px;
                margin-top: auto;
                flex-wrap: wrap;
            }
            
            .modal-button {
                display: flex;
                align-items: center;
                gap: 10px;
                background-color: #FF6B00;
                color: white;
                padding: 12px 20px;
                text-decoration: none;
                font-weight: 700;
                transition: all 0.3s ease;
            }
            
            .modal-button:hover {
                background-color: #FFF5E1;
                color: #F55800;
                border: 2px solid #F55800;
            }
        `;
        const styleElement = document.createElement('style');
        styleElement.textContent = modalCSS;
        document.head.appendChild(styleElement);
    }
    createModal();
    const modal = document.getElementById('mailPopupModal');
    const closeButton = document.querySelector('.close-button');
    const mailIcon = document.querySelector('.envelope-regular');
    function openModal() {
        
        modal.style.display = 'block';
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
        document.body.style.overflow = 'hidden';
    }
    
    function closeModal() {
        modal.classList.remove('show'); 
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
        document.body.style.overflow = '';
    }
    const mailLink = mailIcon ? mailIcon.closest('a') : null;
    if (mailLink) {
        mailLink.addEventListener('click', function(e) {
            e.preventDefault(); 
            openModal();
        });
    }
    closeButton.addEventListener('click', closeModal);
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
});