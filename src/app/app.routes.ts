import { Routes } from '@angular/router';
import { EcommerceComponent } from './dashboard/ecommerce.component';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { EcommercePageComponent } from './pages/ecommerce-page/ecommerce-page.component';
import { EProductsGridComponent } from './pages/ecommerce-page/e-products-grid/e-products-grid.component';
import { EProductsListComponent } from './pages/ecommerce-page/e-products-list/e-products-list.component';
import { EProductDetailsComponent } from './pages/ecommerce-page/e-product-details/e-product-details.component';
import { ECreateProductComponent } from './pages/ecommerce-page/e-create-product/e-create-product.component';
import { EEditProductComponent } from './pages/ecommerce-page/e-edit-product/e-edit-product.component';
import { EOrdersComponent } from './pages/ecommerce-page/e-orders/e-orders.component';
import { EOrderDetailsComponent } from './pages/ecommerce-page/e-order-details/e-order-details.component';
import { ECreateOrderComponent } from './pages/ecommerce-page/e-create-order/e-create-order.component';
import { ECustomersComponent } from './pages/ecommerce-page/e-customers/e-customers.component';
import { ECartComponent } from './pages/ecommerce-page/e-cart/e-cart.component';
import { ECheckoutComponent } from './pages/ecommerce-page/e-checkout/e-checkout.component';
import { ESellersComponent } from './pages/ecommerce-page/e-sellers/e-sellers.component';
import { ERefundsComponent } from './pages/ecommerce-page/e-refunds/e-refunds.component';
import { ECategoriesComponent } from './pages/ecommerce-page/e-categories/e-categories.component';
import { ECreateCategoryComponent } from './pages/ecommerce-page/e-create-category/e-create-category.component';
import { EEditCategoryComponent } from './pages/ecommerce-page/e-edit-category/e-edit-category.component';
import { EReviewsComponent } from './pages/ecommerce-page/e-reviews/e-reviews.component';
import { ESellerDetailsComponent } from './pages/ecommerce-page/e-seller-details/e-seller-details.component';
import { ECustomerDetailsComponent } from './pages/ecommerce-page/e-customer-details/e-customer-details.component';
import { ECreateSellerComponent } from './pages/ecommerce-page/e-create-seller/e-create-seller.component';
import { EOrderTrackingComponent } from './pages/ecommerce-page/e-order-tracking/e-order-tracking.component';
import { CalendarComponent } from './apps/calendar/calendar.component';
import { EmailComponent } from './apps/email/email.component';
import { InboxComponent } from './apps/email/inbox/inbox.component';
import { ComposeComponent } from './apps/email/compose/compose.component';
import { ReadComponent } from './apps/email/read/read.component';
import { InvoicesPageComponent } from './pages/invoices-page/invoices-page.component';
import { InvoicesComponent } from './pages/invoices-page/invoices/invoices.component';
import { InvoiceDetailsComponent } from './pages/invoices-page/invoice-details/invoice-details.component';
import { StarterComponent } from './starter/starter.component';
import { PricingPageComponent } from './pages/pricing-page/pricing-page.component';
import { NotificationsPageComponent } from './pages/notifications-page/notifications-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { TeamMembersComponent } from './pages/users-page/team-members/team-members.component';
import { UsersListComponent } from './pages/users-page/users-list/users-list.component';
import { AddUserComponent } from './pages/users-page/add-user/add-user.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { UserProfileComponent } from './pages/profile-page/user-profile/user-profile.component';
import { TeamsComponent } from './pages/profile-page/teams/teams.component';
import { PProjectsComponent } from './pages/profile-page/p-projects/p-projects.component';
import { IconsComponent } from './icons/icons.component';
import { MaterialSymbolsComponent } from './icons/material-symbols/material-symbols.component';
import { RemixiconComponent } from './icons/remixicon/remixicon.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './authentication/reset-password/reset-password.component';
import { LockScreenComponent } from './authentication/lock-screen/lock-screen.component';
import { LogoutComponent } from './authentication/logout/logout.component';
import { ConfirmEmailComponent } from './authentication/confirm-email/confirm-email.component';
import { SettingsComponent } from './settings/settings.component';
import { AccountSettingsComponent } from './settings/account-settings/account-settings.component';
import { ChangePasswordComponent } from './settings/change-password/change-password.component';
import { ConnectionsComponent } from './settings/connections/connections.component';
import { PrivacyPolicyComponent } from './settings/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './settings/terms-conditions/terms-conditions.component';
import { InternalErrorComponent } from './common/internal-error/internal-error.component';
import { BlankPageComponent } from './blank-page/blank-page.component';
import { ComingSoonPageComponent } from './pages/coming-soon-page/coming-soon-page.component';
import { MyProfileComponent } from './my-profile/my-profile.component';


export const routes: Routes = [
    { path: '', component: EcommerceComponent },
    { path: 'calendar', component: CalendarComponent },
    {
        path: 'email',
        component: EmailComponent,
        children: [
            { path: '', component: InboxComponent },
            { path: 'compose', component: ComposeComponent },
            { path: 'read', component: ReadComponent },
        ],
    },
    {
        path: 'ecommerce-page',
        component: EcommercePageComponent,
        children: [
            { path: '', component: EProductsGridComponent },
            { path: 'products-list', component: EProductsListComponent },
            { path: 'product-details', component: EProductDetailsComponent },
            { path: 'create-product', component: ECreateProductComponent },
            { path: 'edit-product', component: EEditProductComponent },
            { path: 'orders', component: EOrdersComponent },
            { path: 'order-details', component: EOrderDetailsComponent },
            { path: 'create-order', component: ECreateOrderComponent },
            { path: 'order-tracking', component: EOrderTrackingComponent },
            { path: 'customers', component: ECustomersComponent },
            { path: 'customer-details', component: ECustomerDetailsComponent },
            { path: 'cart', component: ECartComponent },
            { path: 'checkout', component: ECheckoutComponent },
            { path: 'sellers', component: ESellersComponent },
            { path: 'seller-details', component: ESellerDetailsComponent },
            { path: 'create-seller', component: ECreateSellerComponent },
            { path: 'refunds', component: ERefundsComponent },
            { path: 'categories', component: ECategoriesComponent },
            { path: 'create-category', component: ECreateCategoryComponent },
            { path: 'edit-category', component: EEditCategoryComponent },
            { path: 'reviews', component: EReviewsComponent },
        ],
    },
    {
        path: 'invoices',
        component: InvoicesPageComponent,
        children: [
            { path: '', component: InvoicesComponent },
            { path: 'invoice-details', component: InvoiceDetailsComponent },
        ],
    },
    { path: 'starter', component: StarterComponent },
    { path: 'pricing', component: PricingPageComponent },
    { path: 'notifications', component: NotificationsPageComponent },
    {
        path: 'users',
        component: UsersPageComponent,
        children: [
            { path: '', component: TeamMembersComponent },
            { path: 'users-list', component: UsersListComponent },
            { path: 'add-user', component: AddUserComponent },
        ],
    },
    {
        path: 'profile',
        component: ProfilePageComponent,
        children: [
            { path: '', component: UserProfileComponent },
            { path: 'teams', component: TeamsComponent },
            { path: 'projects', component: PProjectsComponent },
        ],
    },
    {
        path: 'icons',
        component: IconsComponent,
        children: [
            { path: '', component: MaterialSymbolsComponent },
            { path: 'remixicon', component: RemixiconComponent },
        ],
    },
    {
        path: 'authentication',
        component: AuthenticationComponent,
        children: [
            { path: '', component: SignInComponent },
            { path: 'sign-up', component: SignUpComponent },
            { path: 'forgot-password', component: ForgotPasswordComponent },
            { path: 'reset-password', component: ResetPasswordComponent },
            { path: 'lock-screen', component: LockScreenComponent },
            { path: 'confirm-email', component: ConfirmEmailComponent },
            { path: 'logout', component: LogoutComponent },
        ],
    },
    { path: 'my-profile', component: MyProfileComponent },
    {
        path: 'settings',
        component: SettingsComponent,
        children: [
            { path: '', component: AccountSettingsComponent },
            { path: 'change-password', component: ChangePasswordComponent },
            { path: 'connections', component: ConnectionsComponent },
            { path: 'privacy-policy', component: PrivacyPolicyComponent },
            { path: 'terms-conditions', component: TermsConditionsComponent },
        ],
    },
    { path: 'coming-soon', component: ComingSoonPageComponent },
    { path: 'blank-page', component: BlankPageComponent },
    { path: 'internal-error', component: InternalErrorComponent },

    { path: '**', component: NotFoundComponent }, // This line will remain down from the whole pages component list
];
