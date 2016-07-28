import { TreeViewNode } from '../shared/index';
import { ToolboxItem } from './toolbox-item';

export class ToolboxItems {

    public getGroups() {
        var groups = new Array<TreeViewNode>();

        var allGroup = new TreeViewNode({ name: 'All' }, new Array<TreeViewNode>());
        groups.push(allGroup);

        var toolboxItems = this.getAllToolboxItems();
        toolboxItems.forEach((item) => {
          allGroup.children.push(new TreeViewNode({ name: item.name }, new Array<TreeViewNode>()));
        });

        return groups;
    }

    private getAllToolboxItems() {
      var toolboxItems: Array<ToolboxItem> = [
        new ToolboxItem(
          'Virtual machine.png',
          'Virtual Machine',
          'Microsoft.Compute/virtualMachines',
          true),
        new ToolboxItem(
          'Unidentified feature object.png',
          'VM Extension',
          'Microsoft.Compute/virtualMachines/extensions'),
        new ToolboxItem(
          'Availability Set.png',
          'Availability Set',
          'Microsoft.Compute/availabilitySets'),
        new ToolboxItem(
          'Azure load balancer.png',
          'Load Balancer',
          'Microsoft.Network/loadBalancers',
          true),
        new ToolboxItem(
          'Virtual Network.png',
          'Network',
          'Microsoft.Network/virtualNetworks',
          true),
        new ToolboxItem(
          'NIC.png',
          'NIC',
          'Microsoft.Network/networkInterfaces',
          true),
        new ToolboxItem(
          'Service Endpoint.png',
          'Public IP',
          'Microsoft.Network/publicIPAddresses',
          true),
        new ToolboxItem(
          'Unidentified feature object.png',
          'NSG',
          'Microsoft.Network/networkSecurityGroups'),
        new ToolboxItem(
          'Unidentified feature object.png',
          'App Gateway',
          'Microsoft.Network/applicationGateways'),
        new ToolboxItem(
          'Storage (Azure).png',
          'Storage Acct',
          'Microsoft.Storage/storageAccounts',
          true),
        new ToolboxItem(
          'Unidentified feature object.png',
          'Automation',
          'Microsoft.Automation/automationAccounts'),
        new ToolboxItem(
          'Logic App.png',
          'Workflow',
          'Microsoft.Logic/workflows'),
        new ToolboxItem(
          'Deployment.png',
          'Deployment',
          'Microsoft.Resources/deployments'),
        new ToolboxItem(
          'Web App (was Websites).png',
          'Server Farm',
          'Microsoft.Web/serverfarms'),
        new ToolboxItem(
          'Cloud Service.png',
          'Hosting Env',
          'Microsoft.Web/hostingEnvironments'),
        new ToolboxItem(
          'Key Vault.png',
          'Key Vault',
          'Microsoft.KeyVault/vaults'),
        new ToolboxItem(
          'Azure SQL Database.png',
          'SQL Server',
          'Microsoft.Sql/servers'),
        new ToolboxItem(
          'Web App (was Websites).png',
          'Web App',
          'Microsoft.Web/sites'),
        new ToolboxItem(
          'Web App (was Websites).png',
          'Server Farm',
          'Microsoft.Web/serverFarms'),
        new ToolboxItem(
          'Autoscaling.png',
          'Auto Scale',
          'microsoft.insights/autoscalesettings'),
        new ToolboxItem(
          'Azure alert.png',
          'Alert Rules',
          'microsoft.insights/alertrules'),
        new ToolboxItem(
          'Operational Insights.png',
          'Insights',
          'microsoft.insights/components'),
        new ToolboxItem(
          'Web App (was Websites).png',
          'Web Site',
          'Microsoft.Web/Sites'),
        new ToolboxItem(
          'API App.png',
          'API App',
          'Microsoft.AppService/apiApps'),
        new ToolboxItem(
          'Unidentified feature object.png',
          'App Gateway',
          'Microsoft.AppService/gateways'),
        new ToolboxItem(
          'Availability Set.png',
          'VM Scale Set',
          'Microsoft.Compute/virtualMachineScaleSets'),
        new ToolboxItem(
          'cdn.png',
          'CDN Profile',
          'Microsoft.Cdn/Profiles',
          true),
        new ToolboxItem(
          'cdn.png',
          'CDN Endpoint',
          'Microsoft.Cdn/Profiles/Endpoints',
          true)
      ];

      return toolboxItems;
    }
}
