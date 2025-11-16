import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import SettingsIcon from '@mui/icons-material/Settings';
import './Navbar.css';

const pages = [
    { label: 'Inicio', icon: <HomeIcon />, href: '#inicio' },
    { label: 'Contacto', icon: <MailIcon />, href: '#contacto' },
    { label: 'Servicios', icon: <SettingsIcon />, href: '#servicios' },
];

const Navbar = () => {
    return (
        <AppBar position="static" className="navbar-appbar">
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Typography variant="h3" component="a" href="#inicio" className="navbar-logo">
                        IES Cura Valera
                    </Typography>
                    <Box className="navbar-desktop-menu" sx={{ display: 'flex', gap: 3, ml: 4 }}>
                        {pages.map((page) => (
                            <Button key={page.label} href={page.href} className="navbar-button">
                                {page.icon} {page.label}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
