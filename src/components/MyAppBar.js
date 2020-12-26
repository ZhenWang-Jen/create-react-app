import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import clsx from 'clsx';
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import ListSubheader from '@material-ui/core/ListSubheader';
import Collapse from '@material-ui/core/Collapse';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';

const drawerWidth = 240;
// '宏观经济': {
//   path_name: 'macro_economy',
//   sub_menus: [
//     {
//       sub_menu: '子菜单',
//       path_name: 'sub_menu1'
//     },
//     {
//       sub_menu: '另一个子菜单',
//       path_name: 'sub_menu2'
//     }
//   ]
// },
const drawerContentEcon = [
  {
    menu: '宏观经济',
    path_name: 'macro_economy',
    sub_menus: [
      {
        sub_menu: '经济政策',
        path_name: 'economic_policy'
      },
      {
        sub_menu: '重要事件',
        path_name: 'news'
      },
      {
        sub_menu: '数据链接',
        path_name: 'external_links'
      },
      {
        sub_menu: '分析计算',
        path_name: 'analysis'
      },
      {
        sub_menu: '数据监控',
        path_name: 'monitor'
      }
    ]
  },
  {
    menu: '整体市场',
    path_name: 'market_overview',
    sub_menus: [
      {
        sub_menu: '统计数据',
        path_name: 'statisticsis'
      },
      {
        sub_menu: '板块细分',
        path_name: 'sectors'
      },
      {
        sub_menu: '重要图表',
        path_name: 'charts'
      },
      {
        sub_menu: '异常标的',
        path_name: 'unusual_underlying'
      }
    ]
  },
  {
    menu: '关注列表',
    path_name: 'watch_list',
    sub_menus: [
      {
        sub_menu: '待定菜单',
        path_name: 'sub_menu1'
      },
      {
        sub_menu: '另一个待定子菜单',
        path_name: 'sub_menu2'
      }
    ]
  },
  {
    menu: '投资组合',
    path_name: 'portfolio',
    sub_menus: [
      {
        sub_menu: '待定菜单',
        path_name: 'sub_menu1'
      },
      {
        sub_menu: '另一个待定子菜单',
        path_name: 'sub_menu2'
      }
    ]
  },
  {
    menu: '信号总览',
    path_name: 'signal_overview',
    sub_menus: [
      {
        sub_menu: '待定菜单',
        path_name: 'sub_menu1'
      },
      {
        sub_menu: '另一个待定子菜单',
        path_name: 'sub_menu2'
      }
    ]
  },
  {
    menu: '系统管理',
    path_name: 'system_management',
    sub_menus: [
      {
        sub_menu: '待定菜单',
        path_name: 'sub_menu1'
      },
      {
        sub_menu: '另一个待定子菜单',
        path_name: 'sub_menu2'
      }
    ]
  },
  {
    menu: '选股神器',
    path_name: 'stock_screener',
    sub_menus: [
      {
        sub_menu: '待定菜单',
        path_name: 'sub_menu1'
      },
      {
        sub_menu: '另一个待定子菜单',
        path_name: 'sub_menu2'
      }
    ]
  }
];

const drawerContentCompanies = [
  {
    menu: '基本信息',
    path_name: 'underlying',
    sub_menus: [
      {
        sub_menu: '基本介绍',
        path_name: 'basic_info'
      },
      {
        sub_menu: '管理层',
        path_name: 'leadership'
      },
      {
        sub_menu: '所属行业',
        path_name: 'industry'
      },
      {
        sub_menu: '持股信息',
        path_name: 'shareholders'
      },
      {
        sub_menu: '财务动态',
        path_name: 'financial_updates'
      }
    ]
  },
  {
    menu: '财务信息',
    path_name: 'financial_info',
    sub_menus: [
      {
        sub_menu: '资产负债表',
        path_name: 'balance_sheet'
      },
      {
        sub_menu: '现金流表',
        path_name: 'cash_flow_statement'
      },
      {
        sub_menu: '利润表',
        path_name: 'income_statement'
      },
      {
        sub_menu: '重要财务指标',
        path_name: 'important_indicator'
      },
      {
        sub_menu: '估值模型',
        path_name: 'valuation_modelling'
      }
    ]
  },
  {
    menu: '技术图表',
    path_name: 'technical_analysis',
    sub_menus: [
      {
        sub_menu: '量价图表',
        path_name: 'volume_price_chart'
      },
      {
        sub_menu: '各种指标',
        path_name: 'technical_indicator'
      },
      {
        sub_menu: '信号在图表中的标识',
        path_name: 'tbd_path_name'
      },
      {
        sub_menu: '与指数相关性',
        path_name: 'association_with_indexs'
      }
    ]
  },
  {
    menu: '信号',
    path_name: 'signal',
    sub_menus: [
      {
        sub_menu: '标的信号',
        path_name: 'tbd_path_name'
      },
      {
        sub_menu: '市场信号',
        path_name: 'market_signal'
      }
    ]
  },
  {
    menu: '仓位信息',
    path_name: 'signal_overview',
    sub_menus: [
      {
        sub_menu: '待定菜单',
        path_name: 'tbd_path_name'
      }
    ]
  }
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',

    // width: '100%',
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    color: 'white',
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function PersistentDrawerLeft(props) {
  const [state, setState] = React.useState({});
  // Set values like this
  const handleClick = (path_name) => {
    setState(prevState => ({ ...prevState, [path_name]: !state[`${path_name}`] }));
  };
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        color="primary"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          
          <Link to={'/home'}>
            <Typography color="inherit" className={classes.title} variant="h6" noWrap>
              Stream            
            </Typography>
          </Link>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {drawerContentEcon.map((drawerRow, index) => (
            <React.Fragment key={index}>
              <Link to={`/${drawerRow['path_name']}`}>
                <ListItem button onClick={() => handleClick(drawerRow['path_name'])}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>

                  <ListItemText primary={drawerRow['menu']} />
                  {state[`${drawerRow['path_name']}`] ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
              </Link>

              <Collapse in={state[`${drawerRow['path_name']}`]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {drawerRow['sub_menus'].map((subMenuRow, index) => (
                    <Link to={`/${drawerRow['path_name']}/${subMenuRow['path_name']}`} key={index}>
                      <ListItem button className={classes.nested}>
                        <ListItemIcon>
                          <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary={subMenuRow['sub_menu']} />
                      </ListItem>
                    </Link>
                  ))}
                </List>
              </Collapse>
            </React.Fragment>
          ))}
        </List>
        <Divider />
        {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider /> */}

        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              标的细分
            </ListSubheader>
          }
          // className={classes.root}
        >
          {drawerContentCompanies.map((drawerRow, index) => (
            <React.Fragment key={index}>
              <Link to={`/${drawerRow['path_name']}`}>
                <ListItem button onClick={() => handleClick(drawerRow['path_name'])}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>

                  <ListItemText primary={drawerRow['menu']} />
                  {state[`${drawerRow['path_name']}`] ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
              </Link>

              <Collapse in={state[`${drawerRow['path_name']}`]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {drawerRow['sub_menus'].map((subMenuRow, index) => (
                    <Link to={`/${drawerRow['path_name']}/${subMenuRow['path_name']}`} key={index}>
                      <ListItem button className={classes.nested}>
                        <ListItemIcon>
                          <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary={subMenuRow['sub_menu']} />
                      </ListItem>
                    </Link>
                  ))}
                </List>
              </Collapse>
            </React.Fragment>
          ))}
        </List>
      </Drawer>
    
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {props.children}
      </main>

      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}

