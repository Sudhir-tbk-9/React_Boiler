import { Sidebar, Menu, MenuItem, SubMenu} from "react-pro-sidebar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import ScheduleIcon from '@mui/icons-material/Schedule';
import PermDataSettingIcon from '@mui/icons-material/PermDataSetting';
import {
  MenuRounded as MenuRoundedIcon,
  GridViewRounded as GridViewRoundedIcon,
  ReceiptRounded as ReceiptRoundedIcon,
  BarChartRounded as BarChartRoundedIcon,
  TimelineRounded as TimelineRoundedIcon,
  BubbleChartRounded as BubbleChartRoundedIcon,
  WalletRounded as WalletRoundedIcon,
  AccountBalanceRounded as AccountBalanceRoundedIcon,
  SavingsRounded as SavingsRoundedIcon,
  MonetizationOnRounded as MonetizationOnRoundedIcon,
  SettingsApplicationsRounded as SettingsApplicationsRoundedIcon,
  AccountCircleRounded as AccountCircleRoundedIcon,
  ShieldRounded as ShieldRoundedIcon,
  NotificationsRounded as NotificationsRoundedIcon,
  LogoutRounded as LogoutRoundedIcon,
} from "@mui/icons-material";
import { LogoutService } from "../apiServices/logout.service.js";


// Define SidebarData component
function SidebarData() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();


  const toggleSidebar = () =>{
    return setCollapsed(!collapsed)
  } 

  const handleNavigation = (path) => {
    navigate(path);
  };
  const handleLogout=()=>{
    // navigate('/Login');
    const username=localStorage.getItem('username')
    LogoutService.logoutService(username,navigate);
  }

  return (
    <div style={{ display: "flex", height: "100dvh" , backgroundColor : "#75DDDD" }}>
      <Sidebar collapsed={collapsed} className="app">
        <Menu >
          <MenuItem className="menu1" icon={<MenuRoundedIcon />} onClick={toggleSidebar}>
            <h2> </h2>
          </MenuItem>
          <MenuItem icon={<GridViewRoundedIcon />} onClick={() => handleNavigation('/dashBoard')}> Dashboard </MenuItem>
          <MenuItem icon={<PersonIcon />} onClick={() => handleNavigation('/users')}> Users </MenuItem>
          <MenuItem icon={<ScheduleIcon />} onClick={() => handleNavigation('/scheduler')}> Schedular </MenuItem>
          <MenuItem icon={<PermDataSettingIcon />} onClick={() => handleNavigation('/configuraton')}> Config Master </MenuItem>
          <SubMenu label="Email Config" icon={<BarChartRoundedIcon />}>
            <MenuItem icon={<TimelineRoundedIcon />}  onClick={() => handleNavigation('/allemailconfig')}> Email Template </MenuItem>
            <MenuItem icon={<BubbleChartRoundedIcon />}  onClick={() => handleNavigation('/allsmtplist')}>SMTP Server</MenuItem>
          </SubMenu>
          {/* <SubMenu label="Wallets" icon={<WalletRoundedIcon />}>
            <MenuItem icon={<AccountBalanceRoundedIcon />}>
              Current Wallet
            </MenuItem>
            <MenuItem icon={<SavingsRoundedIcon />}>Savings Wallet</MenuItem>
          </SubMenu>
          <MenuItem icon={<MonetizationOnRoundedIcon />}>Transactions</MenuItem>
          <SubMenu label="Settings" icon={<SettingsApplicationsRoundedIcon />}>
            <MenuItem icon={<AccountCircleRoundedIcon />}> Account </MenuItem>
            <MenuItem icon={<ShieldRoundedIcon />}> Privacy </MenuItem>
            <MenuItem icon={<NotificationsRoundedIcon />}>
              Notifications
            </MenuItem>
          </SubMenu> */}
          <MenuItem icon={<LogoutRoundedIcon />} onClick={handleLogout}> Logout </MenuItem>
        </Menu>
      </Sidebar>
      {/* <h1>WELCOME TO QUICKPAY</h1> */}
    </div>
  );
}

export default SidebarData;
