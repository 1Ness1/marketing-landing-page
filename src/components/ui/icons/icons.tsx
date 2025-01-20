import {ReactNode} from "react";
import "./icons.scss";

const IconContainer = ({children}: {children: ReactNode}) => <div className="icon">{children}</div>

export const InfiniteDownloadIcon = () => (
    <IconContainer>
        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M11 7H16L10 13L4 7H9V0H11V7ZM2 16H18V9H20V17C20 17.5523 19.5523 18 19 18H1C0.44772 18 0 17.5523 0 17V9H2V16Z"
                fill="#4338CA"/>
        </svg>
    </IconContainer>
)

export const PurelyHandcraftedIcon = () => (
    <IconContainer>
        <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M14.4565 7.67491L14.3144 7.53285C13.6661 6.90783 12.8549 6.43357 11.9235 6.18399C9.0168 5.40515 6.22541 7.05261 5.43185 10.0142C5.38901 10.1741 5.36574 10.3536 5.3285 10.805C5.17423 12.675 4.73449 14.0696 3.5286 15.4841C5.78847 16.3726 8.46572 16.9984 10.5016 16.9984C12.9702 16.9984 15.1644 15.3393 15.8126 12.9201C16.3306 10.9868 15.7513 9.018 14.4565 7.67491ZM12.2886 4.21289L17.2278 0.371297C17.6259 0.0616768 18.1922 0.0969369 18.5488 0.453547L21.543 3.44774C21.8997 3.80435 21.9349 4.3707 21.6253 4.76879L17.7847 9.7067C18.0778 10.895 18.0836 12.1719 17.7444 13.4377C16.8463 16.7896 13.8142 18.9984 10.5016 18.9984C7 18.9984 2.5 17.4966 0 15.9966C3.97978 12.9966 3.04722 11.1864 3.5 9.4966C4.55843 5.54646 8.34224 3.23923 12.2886 4.21289ZM15.7015 6.09149C15.7673 6.15494 15.8319 6.21952 15.8952 6.2852L17.0297 7.41972L19.5046 4.23774L17.7589 2.49198L14.5769 4.96685L15.7015 6.09149Z"
                fill="#4338CA"/>
        </svg>
    </IconContainer>
)

export const UnderLicenceIcon = () => (
    <IconContainer>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M14.2877 7.42773C13.413 5.97351 11.8195 5 10 5C7.23999 5 5 7.23999 5 10C5 12.76 7.23999 15 10 15C11.8195 15 13.413 14.0265 14.2877 12.5723L12.5729 11.5442C12.0483 12.4166 11.0927 13 10 13C8.3425 13 7 11.6575 7 10C7 8.3425 8.3425 7 10 7C11.093 7 12.0491 7.58386 12.5735 8.4568L14.2877 7.42773ZM20 10C20 4.47998 15.52 0 10 0C4.47998 0 0 4.47998 0 10C0 15.52 4.47998 20 10 20C15.52 20 20 15.52 20 10ZM2 10C2 5.57996 5.57996 2 10 2C14.42 2 18 5.57996 18 10C18 14.42 14.42 18 10 18C5.57996 18 2 14.42 2 10Z"
                fill="#4338CA"/>
        </svg>
    </IconContainer>
)

export const CancelationIcon = () => (
    <IconContainer>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M10.0049 0C15.5277 0 20.0049 4.47715 20.0049 10C20.0049 15.5228 15.5277 20 10.0049 20C7.57847 20 5.3539 19.1358 3.62216 17.6985L3.37815 17.4892L4.27949 15.5875C5.73229 17.0759 7.76067 18 10.0049 18C14.4232 18 18.0049 14.4183 18.0049 10C18.0049 5.58172 14.4232 2 10.0049 2C5.66997 2 2.14034 5.44784 2.00869 9.7508L2.00488 10H4.50488L1.79854 15.7161C0.667963 14.096 0.00488281 12.1254 0.00488281 10C0.00488281 4.47715 4.48204 0 10.0049 0ZM11.0049 4V6H13.5049V8H8.0049C7.72874 8 7.50488 8.2239 7.50488 8.5C7.50488 8.7455 7.68176 8.9496 7.91501 8.9919L8.0049 9H12.0049C13.3856 9 14.5049 10.1193 14.5049 11.5C14.5049 12.8807 13.3856 14 12.0049 14H11.0049V16H9.0049V14H6.50488V12H12.0049C12.281 12 12.5049 11.7761 12.5049 11.5C12.5049 11.2545 12.328 11.0504 12.0948 11.0081L12.0049 11H8.0049C6.62417 11 5.50488 9.8807 5.50488 8.5C5.50488 7.11929 6.62417 6 8.0049 6H9.0049V4H11.0049Z"
                fill="#4338CA"/>
        </svg>
    </IconContainer>
)

export const EmpoweringIcon = () => (
    <IconContainer>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M10 9C12.7614 9 15 11.2386 15 14V20H13V14C13 12.4023 11.7511 11.0963 10.1763 11.0051L10 11C8.4023 11 7.09634 12.2489 7.00509 13.8237L7 14V20H5V14C5 11.2386 7.23858 9 10 9ZM3.5 12C3.77885 12 4.05009 12.0326 4.3101 12.0942C4.14202 12.594 4.03873 13.122 4.00896 13.6693L4 14L4.0007 14.0856C3.88757 14.0456 3.76821 14.0187 3.64446 14.0069L3.5 14C2.7203 14 2.07955 14.5949 2.00687 15.3555L2 15.5V20H0V15.5C0 13.567 1.567 12 3.5 12ZM16.5 12C18.433 12 20 13.567 20 15.5V20H18V15.5C18 14.7203 17.4051 14.0796 16.6445 14.0069L16.5 14C16.3248 14 16.1566 14.03 16.0003 14.0852L16 14C16 13.3343 15.8916 12.694 15.6915 12.0956C15.9499 12.0326 16.2211 12 16.5 12ZM3.5 6C4.88071 6 6 7.11929 6 8.5C6 9.8807 4.88071 11 3.5 11C2.11929 11 1 9.8807 1 8.5C1 7.11929 2.11929 6 3.5 6ZM16.5 6C17.8807 6 19 7.11929 19 8.5C19 9.8807 17.8807 11 16.5 11C15.1193 11 14 9.8807 14 8.5C14 7.11929 15.1193 6 16.5 6ZM3.5 8C3.22386 8 3 8.2239 3 8.5C3 8.7761 3.22386 9 3.5 9C3.77614 9 4 8.7761 4 8.5C4 8.2239 3.77614 8 3.5 8ZM16.5 8C16.2239 8 16 8.2239 16 8.5C16 8.7761 16.2239 9 16.5 9C16.7761 9 17 8.7761 17 8.5C17 8.2239 16.7761 8 16.5 8ZM10 0C12.2091 0 14 1.79086 14 4C14 6.20914 12.2091 8 10 8C7.79086 8 6 6.20914 6 4C6 1.79086 7.79086 0 10 0ZM10 2C8.8954 2 8 2.89543 8 4C8 5.10457 8.8954 6 10 6C11.1046 6 12 5.10457 12 4C12 2.89543 11.1046 2 10 2Z"
                fill="#4338CA"/>
        </svg>
    </IconContainer>
)

export const NoLimitationIcon = () => (
    <IconContainer>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M3.46257 2.43262C5.21556 0.91688 7.5007 0 10 0C15.5228 0 20 4.47715 20 10C20 12.1361 19.3302 14.1158 18.1892 15.7406L15 10H18C18 5.58172 14.4183 2 10 2C7.84982 2 5.89777 2.84827 4.46023 4.22842L3.46257 2.43262ZM16.5374 17.5674C14.7844 19.0831 12.4993 20 10 20C4.47715 20 0 15.5228 0 10C0 7.86386 0.66979 5.88416 1.8108 4.25944L5 10H2C2 14.4183 5.58172 18 10 18C12.1502 18 14.1022 17.1517 15.5398 15.7716L16.5374 17.5674Z"
                fill="#4338CA"/>
        </svg>
    </IconContainer>
)

export const HdIcon = () => (
    <IconContainer>
        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M2 2V16H18V2H2ZM1 0H19C19.5523 0 20 0.44772 20 1V17C20 17.5523 19.5523 18 19 18H1C0.44772 18 0 17.5523 0 17V1C0 0.44772 0.44772 0 1 0ZM5.5 8.25H7.5V6H9V12H7.5V9.75H5.5V12H4V6H5.5V8.25ZM12.5 7.5V10.5H14C14.2761 10.5 14.5 10.2761 14.5 10V8C14.5 7.7239 14.2761 7.5 14 7.5H12.5ZM11 6H14C15.1046 6 16 6.89543 16 8V10C16 11.1046 15.1046 12 14 12H11V6Z"
                fill="#4338CA"/>
        </svg>
    </IconContainer>
)

export const WaterIcon = () => (
    <IconContainer>
        <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M4.05025 8.04673L9 3.09698L13.9497 8.04673C16.6834 10.7804 16.6834 15.2126 13.9497 17.9462C11.2161 20.6799 6.78392 20.6799 4.05025 17.9462C1.31658 15.2126 1.31658 10.7804 4.05025 8.04673ZM15.364 6.63252L9 0.268555L2.63604 6.63252C-0.87868 10.1472 -0.87868 15.8457 2.63604 19.3604C6.15076 22.8752 11.8492 22.8752 15.364 19.3604C18.8787 15.8457 18.8787 10.1472 15.364 6.63252ZM13.2427 10.1714L11.8285 8.75718L4.7574 15.8282L6.17161 17.2425L13.2427 10.1714ZM5.11095 11.232C5.69674 11.8178 6.64648 11.8178 7.2323 11.232C7.8181 10.6463 7.8181 9.69652 7.2323 9.11073C6.64648 8.52494 5.69674 8.52494 5.11095 9.11073C4.52516 9.69652 4.52516 10.6463 5.11095 11.232ZM12.8891 16.8889C12.3033 17.4747 11.3536 17.4747 10.7678 16.8889C10.182 16.3031 10.182 15.3534 10.7678 14.7676C11.3536 14.1818 12.3033 14.1818 12.8891 14.7676C13.4749 15.3534 13.4749 16.3031 12.8891 16.8889Z"
                fill="#4338CA"/>
        </svg>
    </IconContainer>
)

export const OrientationIcon = () => (
    <IconContainer>
        <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M11 0C17.0751 0 22 4.92487 22 11V16H20V11C20 6.1182 16.1132 2.14421 11.2654 2.00384L11 2C6.1182 2 2.14421 5.88681 2.00384 10.7346L2 11V16H0V11C0 4.92487 4.92487 0 11 0ZM11 4C14.866 4 18 7.134 18 11V16H16V11C16 8.3112 13.8777 6.1182 11.2169 6.0046L11 6C8.31124 6 6.11818 8.1223 6.00462 10.7831L6 11V16H4V11C4 7.134 7.13401 4 11 4ZM11 8C12.6569 8 14 9.3431 14 11V16H12V11C12 10.4872 11.614 10.0645 11.1166 10.0067L11 10C10.4872 10 10.0645 10.386 10.0067 10.8834L10 11V16H8V11C8 9.3431 9.3431 8 11 8Z"
                fill="#4338CA"/>
        </svg>
    </IconContainer>
)

export const FasterDownloadsIcon = () => (
    <IconContainer>
        <svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M11.5018 19.0047C10.8432 20.5841 9.5794 21.848 8 22.5066C6.4206 21.848 5.15679 20.5841 4.49816 19.0047H6.7575C7.0838 19.4933 7.5051 19.9171 8 20.248C8.4949 19.9171 8.9162 19.4933 9.2425 19.0047H11.5018ZM14 13.8095L16 16.0777V18.0047H0V16.0777L2 13.8095V8.00475C2 4.5215 4.50442 1.55819 8 0.459961C11.4956 1.55819 14 4.5215 14 8.00475V13.8095ZM13.2692 16.0047L12 14.5653V8.00475C12 5.68691 10.4292 3.57428 8 2.58381C5.57078 3.57428 4 5.68691 4 8.00475V14.5653L2.73076 16.0047H13.2692ZM8 10.0047C6.8954 10.0047 6 9.1093 6 8.00475C6 6.90018 6.8954 6.00475 8 6.00475C9.1046 6.00475 10 6.90018 10 8.00475C10 9.1093 9.1046 10.0047 8 10.0047Z"
                fill="#4338CA"/>
        </svg>
    </IconContainer>
)

export const ConvenienceIcon = () => (
    <IconContainer>
        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M14 4C13.4477 4 13 3.55228 13 3C13 2.44772 13.4477 2 14 2C14.5523 2 15 2.44772 15 3C15 3.55228 14.5523 4 14 4ZM14 6C15.6569 6 17 4.65685 17 3C17 1.34315 15.6569 0 14 0C12.3431 0 11 1.34315 11 3C11 4.65685 12.3431 6 14 6ZM4 1C1.79086 1 0 2.79086 0 5V7H2V5C2 3.89543 2.89543 3 4 3H7V1H4ZM14 19C16.2091 19 18 17.2091 18 15V13H16V15C16 16.1046 15.1046 17 14 17H11V19H14ZM5 11C5 10.4477 4.55228 10 4 10C3.44772 10 3 10.4477 3 11C3 11.5523 3.44772 12 4 12C4.55228 12 5 11.5523 5 11ZM7 11C7 12.6569 5.65685 14 4 14C2.34315 14 1 12.6569 1 11C1 9.3431 2.34315 8 4 8C5.65685 8 7 9.3431 7 11ZM14 9C12.8954 9 12 9.8954 12 11H10C10 8.7909 11.7909 7 14 7C16.2091 7 18 8.7909 18 11H16C16 9.8954 15.1046 9 14 9ZM2 19C2 17.8954 2.89543 17 4 17C5.10457 17 6 17.8954 6 19H8C8 16.7909 6.20914 15 4 15C1.79086 15 0 16.7909 0 19H2Z"
                fill="#4338CA"/>
        </svg>
    </IconContainer>
)

export const RoyaltyIcon = () => (
    <IconContainer>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M14.2877 7.42773C13.413 5.97351 11.8195 5 10 5C7.23999 5 5 7.23999 5 10C5 12.76 7.23999 15 10 15C11.8195 15 13.413 14.0265 14.2877 12.5723L12.5729 11.5442C12.0483 12.4166 11.0927 13 10 13C8.3425 13 7 11.6575 7 10C7 8.3425 8.3425 7 10 7C11.093 7 12.0491 7.58386 12.5735 8.4568L14.2877 7.42773ZM20 10C20 4.47998 15.52 0 10 0C4.47998 0 0 4.47998 0 10C0 15.52 4.47998 20 10 20C15.52 20 20 15.52 20 10ZM2 10C2 5.57996 5.57996 2 10 2C14.42 2 18 5.57996 18 10C18 14.42 14.42 18 10 18C5.57996 18 2 14.42 2 10Z"
                fill="#4338CA"/>
        </svg>
    </IconContainer>
)

export const AddressIcon = () => (
    <IconContainer>
        <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M20 16H22V18H0V16H2V1C2 0.44772 2.44772 0 3 0H13C13.5523 0 14 0.44772 14 1V16H18V8H16V6H19C19.5523 6 20 6.44772 20 7V16ZM4 2V16H12V2H4ZM6 8H10V10H6V8ZM6 4H10V6H6V4Z"
                fill="#4338CA"/>
        </svg>
    </IconContainer>
)

export const TelIcon = () => (
    <IconContainer>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M6.36556 7.6821C7.302 9.3288 8.6712 10.698 10.3179 11.6344L11.2024 10.3961C11.4965 9.9845 12.0516 9.8573 12.4956 10.0998C13.9024 10.8683 15.4571 11.3353 17.0789 11.4637C17.599 11.5049 18 11.9389 18 12.4606V16.9234C18 17.4361 17.6122 17.8657 17.1022 17.9181C16.5723 17.9726 16.0377 18 15.5 18C6.93959 18 0 11.0604 0 2.5C0 1.96227 0.0274201 1.42771 0.0818901 0.89776C0.1343 0.38775 0.56394 0 1.07665 0H5.53942C6.0611 0 6.49513 0.40104 6.5363 0.92109C6.66467 2.54288 7.1317 4.09764 7.9002 5.50444C8.1427 5.9484 8.0155 6.50354 7.6039 6.79757L6.36556 7.6821ZM3.84425 7.0252L5.7442 5.66809C5.20547 4.50514 4.83628 3.27183 4.64727 2H2.00907C2.00303 2.16632 2 2.333 2 2.5C2 9.9558 8.0442 16 15.5 16C15.667 16 15.8337 15.997 16 15.9909V13.3527C14.7282 13.1637 13.4949 12.7945 12.3319 12.2558L10.9748 14.1558C10.4258 13.9425 9.8956 13.6915 9.3874 13.4061L9.3293 13.373C7.3697 12.2587 5.74134 10.6303 4.627 8.6707L4.59394 8.6126C4.30849 8.1044 4.05754 7.5742 3.84425 7.0252Z"
                fill="#4338CA"/>
        </svg>
    </IconContainer>
)

export const EmailIcon = () => (
    <IconContainer>
        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M1 0H19C19.5523 0 20 0.44772 20 1V17C20 17.5523 19.5523 18 19 18H1C0.44772 18 0 17.5523 0 17V1C0 0.44772 0.44772 0 1 0ZM18 4.23792L10.0718 11.338L2 4.21594V16H18V4.23792ZM2.51146 2L10.0619 8.662L17.501 2H2.51146Z"
                fill="#4338CA"/>
        </svg>
    </IconContainer>
)