// src/components/common/ServiceCard.tsx
import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const PHONE_NUMBER = '573247011133'; // ← Cambia esto por tu número real (sin + ni espacios)

interface ServiceCardProps {
  name: string;
  price?: string;
  desc?: string;
  image?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ name, price, desc, image }) => {
  const message = encodeURIComponent(
    `Hola, quiero el servicio: ${name} - ${price || 'Consultar precio'}. ¡Gracias!`
  );
  const waLink = `https://wa.me/${PHONE_NUMBER}?text=${message}`;

  return (
    <Card
      sx={{
        width:'300px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 3,
        overflow: 'hidden',
        backgroundColor: '#1F2937',
        border: '1px solid #374151',
        boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)',
        transition: 'all 0.35s ease-in-out',
        opacity: 0,
        transform: 'translateY(30px)',
        animation: 'fadeInUp 0.7s ease-out forwards',
        '&:hover': {
          transform: 'translateY(-12px) scale(1.03)',
          boxShadow: '0 20px 25px -5px rgba(0,0,0,0.3), 0 10px 10px -5px rgba(0,0,0,0.2)',
          borderColor: '#E63946',
        },
      }}
    >
      {/* Contenedor fijo para la imagen → evita que se estire o desalinee */}
      {image && (
        <Box
          sx={{
            height: { xs: 140, sm: 160 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: '#ffffff10',
            p: 2,
          }}
        >
          <CardMedia
            component="img"
            sx={{
              maxHeight: '100%',
              maxWidth: '100%',
              objectFit: 'contain',
              transition: 'transform 0.4s ease',
              '&:hover': { transform: 'scale(1.08)' },
            }}
            image={image}
            alt={name}
          />
        </Box>
      )}

      <CardContent
        sx={{
          flexGrow: 1,
          textAlign: 'center',
          p: { xs: 2, sm: 3 },
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            fontWeight: 700,
            color: '#F3F4F6',
            mb: 1,
          }}
        >
          {name}
        </Typography>

        {desc && (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              mb: 2,
              minHeight: '3em', // evita que el texto desalinee cards
            }}
          >
            {desc}
          </Typography>
        )}

        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{
            color: '#F59E0B',
            mb: 2,
          }}
        >
          {price || 'Consultar precio'}
        </Typography>
      </CardContent>

      <Button
        variant="contained"
        color="primary"
        fullWidth
        startIcon={<WhatsAppIcon />}
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          py: { xs: 1.8, sm: 2 },
          fontSize: { xs: '1rem', sm: '1.1rem' },
          fontWeight: 600,
          borderRadius: 0,
          transition: 'all 0.3s ease',
          backgroundColor: '#E63946',
          '&:hover': {
            backgroundColor: '#D62839',
            transform: 'scale(1.03)',
          },
        }}
      >
        Comprar por WhatsApp
      </Button>
    </Card>
  );
};

export default ServiceCard;