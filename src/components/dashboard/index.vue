<template>
<div class="dashbaord">
    <div class="m-page-loader">
        <div class="m-blockui">
            <span>
                Please wait...
            </span>
            <span>
                <div class="m-loader m-loader--brand"></div>
            </span>
        </div>
    </div>
<div class="m-grid m-grid--hor m-grid--root m-page">
    <header class="m-grid__item    m-header " data-minimize-offset="200" data-minimize-mobile-offset="200">
        <div class="m-container m-container--fluid m-container--full-height">
            <div class="m-stack m-stack--ver m-stack--desktop">
                <div class="m-stack__item m-brand  m-brand--skin-dark ">
                    <div class="m-stack m-stack--ver m-stack--general">
                        <div class="m-stack__item m-stack__item--middle m-brand__logo">
                            <a href="#" class="m-brand__logo-wrapper">
                                <img alt="CLARTT" src="../../../static/assetss/img/logo.png" width="130">
                            </a>
                        </div>
                        <div class="m-stack__item m-stack__item--middle m-brand__tools">
                            <a href="javascript:;" id="m_aside_left_minimize_toggle"
                               class="m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-desktop-inline-block">
                                <span></span>
                            </a>
                            <a href="javascript:;" id="m_aside_left_offcanvas_toggle"
                               class="m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-tablet-and-mobile-inline-block">
                                <span></span>
                            </a>
                            <a id="m_aside_header_menu_mobile_toggle" href="javascript:;"
                               class="m-brand__icon m-brand__toggler m--visible-tablet-and-mobile-inline-block">
                                <span></span>
                            </a>
                            <a id="m_aside_header_topbar_mobile_toggle" href="javascript:;"
                               class="m-brand__icon m--visible-tablet-and-mobile-inline-block">
                                <i class="fa fa-user-circle-o" style="font-size: 25px !important;"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="m-stack__item m-stack__item--fluid m-header-head" id="m_header_nav">
                    <!-- BEGIN: Horizontal Menu -->
                    <button class="m-aside-header-menu-mobile-close  m-aside-header-menu-mobile-close--skin-dark "
                            id="m_aside_header_menu_mobile_close_btn">
                        <i class="fa fa-close"></i>
                    </button>
                    <div id="m_header_menu"
                         class="m-header-menu m-aside-header-menu-mobile m-aside-header-menu-mobile--offcanvas  m-header-menu--skin-light m-header-menu--submenu-skin-light m-aside-header-menu-mobile--skin-dark m-aside-header-menu-mobile--submenu-skin-dark ">
                        <ul class="m-menu__nav  m-menu__nav--submenu-arrow ">
                            <li class="m-menu__item  m-menu__item--submenu m-menu__item--rel">
                                <a href="https://help.com/sdk-integration" class="m-menu__link m-menu__toggle">
                                    <i class="m-menu__link-icon fa fa-newspaper-o"></i>
                                    <span class="m-menu__link-title">
                                        <span class="m-menu__link-wrap">
                                            <span class="m-menu__link-text">
                                                SDK Documentation
                                            </span>
                                            <span class="m-menu__link-badge">
                                                <span class="m-badge m-badge--brand m-badge--wide">
                                                    new
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <!-- END: Horizontal Menu -->
                    <!-- BEGIN: Topbar -->
                    <div id="m_header_topbar" class="m-topbar  m-stack m-stack--ver m-stack--general">
                        <div class="m-stack__item m-topbar__nav-wrapper">
                            <ul class="m-topbar__nav m-nav m-nav--inline">
                                <li class="m-nav__item m-topbar__user-profile m-topbar__user-profile--img m-dropdown m-dropdown--medium m-dropdown--arrow m-dropdown--header-bg-fill m-dropdown--align-right m-dropdown--mobile-full-width m-dropdown--skin-light"
                                    data-dropdown-toggle="click" aria-expanded="true">
                                    <a href="#" class="m-nav__link m-dropdown__toggle">
                                        <span class="m-topbar__userpic">
                                            <div>
                                                support@testbucks.org <i class="fa fa-caret-down"></i>
                                            </div>
                                        </span>
                                    </a>
                                    <div class="m-dropdown__wrapper">
                                        <div class="m-dropdown__inner">
                                            <div class="m-dropdown__body">
                                                <div class="m-dropdown__content">
                                                    <ul class="m-nav m-nav--skin-light">
                                                        <li class="m-nav__section m--hide">
                                                            <span class="m-nav__section-text">Section</span>
                                                        </li>
                                                        <li class="m-nav__item">
                                                            <a href="https://dashboard.com/publisher/profile"
                                                               class="m-nav__link">
                                                                <i class="m-nav__link-icon fa fa-user-circle"></i>
                                                                <span class="m-nav__link-title">
                                                                    <span class="m-nav__link-wrap">
                                                                        <span class="m-nav__link-text">My Profile</span>
                                                                    </span>
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li class="m-nav__item">
                                                            <a href="https://help.adgem.com/" target="_blank"
                                                               class="m-nav__link">
                                                                <i class="m-nav__link-icon fa fa-life-buoy"></i>
                                                                <span class="m-nav__link-text">Support</span>
                                                            </a>
                                                        </li>
                                                        <li class="m-nav__separator m-nav__separator--fit">
                                                        </li>
                                                        <li class="m-nav__item">
                                                            <a href="https://dashboard.adgem.com/logout"
                                                               class="btn m-btn--pill btn-secondary m-btn m-btn--custom m-btn--label-brand m-btn--bolder"
                                                               onclick="event.preventDefault(); document.getElementById('logout-form').submit();">Logout
                                                            </a>
                                                            <form id="logout-form"
                                                                  action="https://dashboard.adgem.com/logout"
                                                                  method="POST" style="display: none;"><input
                                                                    type="hidden" name="_token"
                                                                    value="xSqQsXI9HCDDmgJmbxyo2zbUrPhjoxDzq5esxopT">
                                                            </form>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- END: Topbar -->
                </div>
            </div>
        </div>
    </header>
    <!-- END: Header -->

    <!-- begin::Body -->

    <div class="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body">
        <!-- BEGIN: Left Aside -->
        <button class="m-aside-left-close  m-aside-left-close--skin-dark " id="m_aside_left_close_btn">
            <i class="fa fa-close"></i>
        </button>
        <div id="m_aside_left" class="m-grid__item	m-aside-left  m-aside-left--skin-dark ">

            <!-- BEGIN: Aside Menu -->
            <div id="m_ver_menu"
                 class="m-aside-menu m-aside-menu--skin-dark m-aside-menu--submenu-skin-dark mCustomScrollbar _mCS_3 mCS-autoHide mCS_no_scrollbar"
                 data-menu-vertical="true" data-menu-scrollable="true" data-menu-dropdown-timeout="500"
                 style="height: 668px; position: relative; overflow: visible;">
                <div id="mCSB_3" class="mCustomScrollBox mCS-minimal-dark mCSB_vertical mCSB_outside"
                     style="max-height: none;" tabindex="0">
                    <div id="mCSB_3_container" class="mCSB_container mCS_y_hidden mCS_no_scrollbar_y"
                         style="position:relative; top:0; left:0;" dir="ltr">
                        <ul class="m-menu__nav  m-menu__nav--dropdown-submenu-arrow ">
                            <li class="m-menu__item  m-menu__item--submenu" aria-haspopup="true"
                                data-menu-submenu-toggle="hover">
                                <router-link to="/dashboard" class="m-menu__link">
                                    <i class="m-menu__link-icon fa fa-dashboard"></i>
                                    <span class="m-menu__link-title">
                                        <span class="m-menu__link-text">Dashboard</span>
                                    </span>
                                </router-link>
                            </li>
                            <li class="m-menu__item  m-menu__item--submenu" aria-haspopup="true"
                                data-menu-submenu-toggle="hover">
                                <router-link to="/wallet" class="m-menu__link">
                                    <i class="m-menu__link-icon fa fa-globe"></i>
                                    <span class="m-menu__link-text">Wallet</span>
                                </router-link>
                            </li>
                            <li class="m-menu__item  m-menu__item--submenu" aria-haspopup="true"
                                data-menu-submenu-toggle="hover">
                                <router-link to="/transaction" class="m-menu__link">
                                    <i class="m-menu__link-icon fa fa-newspaper-o"></i>
                                    <span class="m-menu__link-text">Transaction</span>
                                </router-link>
                            </li>
                            <li class="m-menu__item m-menu__item--submenu" aria-haspopup="true"
                                m-menu-submenu-toggle="hover">
                                <a href="javascript:;" class="m-menu__link m-menu__toggle">
                                    <i class="m-menu__link-icon fa fa-money"></i>
                                    <span class="m-menu__link-text">Payments</span>
                                    <i class="m-menu__ver-arrow fa fa-angle-right"></i>
                                </a>
                                <div class="m-menu__submenu " m-hidden-height="80" style="overflow: hidden;">
                                    <span class="m-menu__arrow"></span>
                                    <ul class="m-menu__subnav">
                                        <li class="m-menu__item  m-menu__item--parent" aria-haspopup="true">
                                            <span class="m-menu__link">
                                                <span class="m-menu__link-text">Payments</span>
                                            </span>
                                        </li>
                                        <li class="m-menu__item" aria-haspopup="true">
                                            <a href="https:/.adgem.com/publisher/payments/paymentdetails"
                                               class="m-menu__link ">
                                                <i class="m-menu__link-bullet m-menu__link-bullet--dot">
                                                    <span></span>
                                                </i><span class="m-menu__link-text">Payment Details</span>
                                            </a>
                                        </li>
                                        <li class="m-menu__item" aria-haspopup="true">
                                            <a href="https:/.adgem.com/publisher/payments"
                                               class="m-menu__link ">
                                                <i class="m-menu__link-bullet m-menu__link-bullet--dot">
                                                    <span></span>
                                                </i><span class="m-menu__link-text">Invoices</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="m-menu__item  m-menu__item--submenu" aria-haspopup="true"
                                data-menu-submenu-toggle="hover">
                                <router-link to="/app/merchant"
                                   class="m-menu__link m-menu__toggle">
                                    <i class="m-menu__link-icon fa fa-user"></i>
                                    <span class="m-menu__link-text">Merchant</span>
                                </router-link>
                            </li>
                            <li class="m-menu__item  m-menu__item--submenu" aria-haspopup="true"
                                data-menu-submenu-toggle="hover">
                                <router-link to="/invoice" class="m-menu__link m-menu__toggle">
                                    <i class="m-menu__link-icon fa fa-life-bouy"></i>
                                    <span class="links-mt m-menu__link-text">Invoice</span>
                                </router-link>
                            </li>
                        </ul>
                        <!-- <center>
                            <img src="https://cdn.ogads.com/assets/img/affiliate-manager/6baced6cf0194052b22957c61b120cc8.jpg" width="100px">
                            <h4 class="m--font-brand">Account Manager</h4>
                            <h5 style="color:white">Tom Voitik</h5>
                            <h6 style="color:white"><i class="fa fa-envelope"></i> tom@adgem.com</h6>
                            <h6 style="color:white"><i class="fa fa-skype"></i> tom.adgem</h6>
                        </center> -->
                    </div>
                </div>
            </div>
        </div>
        <!-- END: Left Aside -->

        <div class="m-grid__item m-grid__item--fluid m-wrapper">
            <div class="content-wrapper">
                <transition class="fade" mode="ease-in">
                    <router-view></router-view>
                </transition>                
            </div>            
        </div>
    </div>


    <!-- end:: Body -->

    <!-- begin::Footer -->
    <footer class="m-grid__item		m-footer ">
        <div class="m-container m-container--fluid m-container--full-height m-page__container">
            <div class="m-stack m-stack--flex-tablet-and-mobile m-stack--ver m-stack--desktop">
                <div class="m-stack__item m-stack__item--left m-stack__item--middle m-stack__item--last">
				<span class="m-footer__copyright">
					2018 ©
					<a href="#" class="m-link">
						Clartt
					</a>
				</span>
                </div>
                <div class="m-stack__item m-stack__item--right m-stack__item--middle m-stack__item--first">
                    <ul class="m-footer__nav m-nav m-nav--inline m--pull-right">
                        <li class="m-nav__item">
                            <a href="#" class="m-nav__link"><span class="m-nav__link-text">About</span></a>
                        </li>
                        <li class="m-nav__item">
                            <a href="https:/.com/legal/" target="_blank" class="m-nav__link"><span class="m-nav__link-text">Privacy</span></a>
                        </li>
                        <li class="m-nav__item">
                            <a href="https:/.com/legal/" target="_blank" class="m-nav__link"><span class="m-nav__link-text">T&amp;C</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    <!-- end::Footer -->

</div>

<!-- end:: Page --> 
  </div>
</template>

<script>
import appDashboard from "@/components/dashboard/dashboard";

export default {
  name: "Header",
  data() {
    return {};
  },
  created() {
    this.loadScript();
  },
  methods: {
    loadScript() {
      let Script = [
        "../../assets/js/scripts.js",
        "../../../static/assetss/js/vendors.js"
      ];
      let script1 = document.createElement("script");
      script1.type = "text/javascript";
      script1.src = "../../assets/js/scripts.js";
      document.body.appendChild(script1);
    }
  },
  components: {
    appDashboard
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../assets/css/v.scss";
@import "../../../static/assetss/css/style.css";
@import "../../../static/assetss/css/bootstrap.css";
@import "../../../static/assetss/css/font-awesome.css";
</style>