// src/components/common/DownloadCard.tsx
import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  CardMedia,
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

interface DownloadCardProps {
  name: string;
  link: string;
  desc?: string;
  image?: string;
}

const DownloadCard: React.FC<DownloadCardProps> = ({ name, link, desc, image }) => {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 3,
        overflow: 'hidden',
        backgroundColor: '#1F2937',
        border: '1px solid #374151',
        boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)',
        transition: 'all 0.35s ease-in-out',
        animation: 'fadeInUp 0.7s ease-out forwards',
        opacity: 0,
        '&:hover': {
          transform: 'translateY(-12px) scale(1.03)',
          boxShadow: '0 20px 25px -5px rgba(0,0,0,0.3)',
          borderColor: '#3B82F6',
        },
      }}
    >
      {image && (
        <Box sx={{ height: 160, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#ffffff10', p: 2 }}>
          <CardMedia
            component="img"
            sx={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
            image={image}
            alt={name}
          />
        </Box>
      )}

      <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 3 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, color: '#F3F4F6' }}>
          {name}
        </Typography>
        {desc && (
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2, whiteSpace: 'pre-wrap', }}>
            {desc}
          </Typography>
        )}
      </CardContent>

      <Button
        variant="contained"
        fullWidth
        startIcon={<DownloadIcon />}
        href={link}
        download
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          py: 2,
          fontSize: '1.1rem',
          fontWeight: 600,
          borderRadius: 0,
          backgroundColor: '#3B82F6', // azul descarga
          '&:hover': { backgroundColor: '#2563EB' },
        }}
      >
        Descargar
      </Button>
    </Card>
  );
};

export default DownloadCard;