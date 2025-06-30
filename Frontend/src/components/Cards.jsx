import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "../components/LanguageContext";
import Swal from 'sweetalert2'

const Cards = ({ item }) => {
    const { name, image, price, description, _id } = item;
    const { t } = useLanguage();

    const navigate = useNavigate();
    const location = useLocation();
    const user = null;

    const handleAddToCart = (item) => {
        Swal.fire({
            title: t('orderViaChat'),
            text: t('orderViaChatDesc'),
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#25D366',
            cancelButtonColor: '#0088cc',
            confirmButtonText: 'WhatsApp',
            cancelButtonText: 'Telegram'
        }).then((result) => {
            if (result.isConfirmed) {
                // Отправка в WhatsApp
                const message = ` ${t('order')}: ${name}\n ${t('price')}: ${price} ₸\n ${description || ''}`;
                const encodedMessage = encodeURIComponent(message);
                window.open(`https://wa.me/77017220051?text=${encodedMessage}`, '_blank');
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                // Отправка в Telegram
                const message = ` ${t('order')}: ${name}\n ${t('price')}: ${price} ₸\n ${description || ''}`;
                const encodedMessage = encodeURIComponent(message);
                window.open(`https://t.me/77017220051?text=${encodedMessage}`, '_blank');
            }
        });
    };

    return (
        <div className="card shadow-xl relative mr-2 sm:mr-5 my-3 md:my-5 bg-white w-full max-w-sm mx-auto">
            <figure className="w-full">
                {image ? (
                    <img
                        src={image}
                        alt={name}
                        className="hover:scale-105 rounded-lg transition-all w-full duration-200 h-48 sm:h-60 object-cover"
                    />
                ) : (
                    // Заглушка для изображения, если его нет
                    <div className="h-48 sm:h-60 w-full flex items-center justify-center rounded-lg" style={{ background: `linear-gradient(to bottom right, #D9B075, #cc9999)` }}>
                        <span className="text-4xl sm:text-6xl">🍽️</span>
                    </div>
                )}
            </figure>

            <div className="card-body text-black p-4 sm:p-6">
                {_id ? (
                    <Link to={`/menu/${_id}`}>
                        <h2 className="card-title text-base sm:text-lg transition-colors line-clamp-2" style={{ color: 'inherit' }}>
                            {name}
                        </h2>
                    </Link>
                ) : (
                    <h2 className="card-title text-base sm:text-lg line-clamp-2" style={{ color: 'inherit' }}>
                        {name}
                    </h2>
                )}

                {description && (
                    <p className="text-sm sm:text-md text-gray-600 line-clamp-3">
                        {description}
                    </p>
                )}

                <div className="card-actions justify-between items-center mt-3 flex-col sm:flex-row gap-2 sm:gap-0">
                    <h5 className="font-semibold text-lg sm:text-xl order-2 sm:order-1">
                        <span className="text-sm text-red-500">₸ </span>
                        {price}
                    </h5>
                    <button
                        onClick={() => handleAddToCart(item)}
                        className="btn text-white border-none hover:opacity-80 w-full sm:w-auto order-1 sm:order-2 touch-target"
                        style={{ backgroundColor: '#0099B1' }}
                    >
                        {t('orderButton')}
                    </button>
                </div>
            </div>

            <style jsx>{`
                .card-title:hover {
                    color: #0099B1 !important;
                }
                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                .line-clamp-3 {
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>
        </div>
    );
};

export default Cards;