import NavbarKeys from "../NavbarKeys/NavbarKeys";

const Navbar = () => {
    return <div className="flex flex-row justify-evenly">
        <NavbarKeys name={'Movie'} link={'xyz'}></NavbarKeys>
        <NavbarKeys name={'Popular'} link={'xyz'}></NavbarKeys>
        <NavbarKeys name={'Top Rated'} link={'xyz'}></NavbarKeys>
        <NavbarKeys name={'Upcoming'} link={'xyz'}></NavbarKeys>
    </div>
}

export default Navbar;