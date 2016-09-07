// import { TreeViewNode } from '../../shared/index';
// import { ToolboxItem } from './toolbox-item';

// export interface TreeNodeArray {
//     [index: string]: TreeViewNode;
// }

// export class ToolboxItems {
//     public getGroups() {
//         let groups: TreeNodeArray = {};
//         let groupArr = new Array<TreeViewNode>();
//         const OtherGroupName: string = 'Other';

//         let toolboxItems = this.getAllToolboxItems();
//         toolboxItems.forEach((item) => {
//           let category = item.categoryName;
//           if (category == null) {
//             category = OtherGroupName;
//           }
//           if (groups[category] == null) {
//             let newCategoryNode = new TreeViewNode({ name: category }, new Array<TreeViewNode>());
//             groups[category] = newCategoryNode;
//             groupArr.push(newCategoryNode);
//           }

//           groups[category].children.push(new TreeViewNode({ name: item.name }, new Array<TreeViewNode>()));
//         });

//        return groupArr;
//     }

//     private getAllToolboxItems() {
//       let toolboxItems: Array<ToolboxItem> = [
//         new ToolboxItem(
//           'Virtual machine.png',
//           'Virtual Machine',
//           'Microsoft.Compute/virtualMachines',
//           true,
//           'Compute'),
//         new ToolboxItem(
//           'Unidentified feature object.png',
//           'VM Extension',
//           'Microsoft.Compute/virtualMachines/extensions',
//           false,
//           'Compute'),
//         new ToolboxItem(
//           'Availability Set.png',
//           'Availability Set',
//           'Microsoft.Compute/availabilitySets',
//           false,
//           'Compute'),
//         new ToolboxItem(
//           'Azure load balancer.png',
//           'Load Balancer',
//           'Microsoft.Network/loadBalancers',
//           true,
//           'Networking'),
//         new ToolboxItem(
//           'Virtual Network.png',
//           'Network',
//           'Microsoft.Network/virtualNetworks',
//           true,
//           'Networking'),
//         new ToolboxItem(
//           'NIC.png',
//           'NIC',
//           'Microsoft.Network/networkInterfaces',
//           true,
//           'Networking'),
//         new ToolboxItem(
//           'Service Endpoint.png',
//           'Public IP',
//           'Microsoft.Network/publicIPAddresses',
//           true,
//           'Networking'),
//         new ToolboxItem(
//           'Unidentified feature object.png',
//           'NSG',
//           'Microsoft.Network/networkSecurityGroups',
//           false,
//           'Networking'),
//         new ToolboxItem(
//           'Storage (Azure).png',
//           'Storage Acct',
//           'Microsoft.Storage/storageAccounts',
//           true,
//           'Data & Storage'),
//         new ToolboxItem(
//           'Unidentified feature object.png',
//           'Automation',
//           'Microsoft.Automation/automationAccounts'),
//         new ToolboxItem(
//           'Logic App.png',
//           'Workflow',
//           'Microsoft.Logic/workflows',
//           false),
//         new ToolboxItem(
//           'Deployment.png',
//           'Deployment',
//           'Microsoft.Resources/deployments'),
//         new ToolboxItem(
//           'Web App (was Websites).png',
//           'Server Farm',
//           'Microsoft.Web/serverfarms',
//           false,
//           'Web & Mobile'),
//         new ToolboxItem(
//           'Cloud Service.png',
//           'Hosting Env',
//           'Microsoft.Web/hostingEnvironments',
//           false,
//           'Compute'),
//         new ToolboxItem(
//           'Key Vault.png',
//           'Key Vault',
//           'Microsoft.KeyVault/vaults'),
//         new ToolboxItem(
//           'Azure SQL Database.png',
//           'SQL Server',
//           'Microsoft.Sql/servers',
//           false,
//           'Data & Storage'),
//         new ToolboxItem(
//           'Autoscaling.png',
//           'Auto Scale',
//           'microsoft.insights/autoscalesettings'),
//         new ToolboxItem(
//           'Azure alert.png',
//           'Alert Rules',
//           'microsoft.insights/alertrules'),
//         new ToolboxItem(
//           'Operational Insights.png',
//           'Insights',
//           'microsoft.insights/components'),
//         new ToolboxItem(
//           'Web App (was Websites).png',
//           'Web Site',
//           'Microsoft.Web/Sites',
//           false,
//           'Web & Mobile'),
//         new ToolboxItem(
//           'API App.png',
//           'API App',
//           'Microsoft.AppService/apiApps',
//           false,
//           'Web & Mobile'),
//         new ToolboxItem(
//           'Unidentified feature object.png',
//           'App Gateway',
//           'Microsoft.AppService/gateways'),
//         new ToolboxItem(
//           'Availability Set.png',
//           'VM Scale Set',
//           'Microsoft.Compute/virtualMachineScaleSets',
//           false,
//           'Compute'),
//         new ToolboxItem(
//           'cdn.png',
//           'CDN Profile',
//           'Microsoft.Cdn/Profiles',
//           true),
//         new ToolboxItem(
//           'cdn.png',
//           'CDN Endpoint',
//           'Microsoft.Cdn/Profiles/Endpoints',
//           true)
//       ];

//       return toolboxItems;
//     }
// }
