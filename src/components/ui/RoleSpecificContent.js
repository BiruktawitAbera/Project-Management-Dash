// Inside a component (e.g., RoleSpecificContent.js)
import { useRole } from '@/context/RoleContext'; // Import the hook to access the role

const RoleSpecificContent = () => {
  // Use the useRole hook to access the current role from context
  const { role } = useRole(); 

  // Check the current role and render the appropriate content
  if (role === 'manager') {
    return <div>Manager Dashboard</div>; // Display content for managers
  }

  if (role === 'team') {
    return <div>Team Member Dashboard</div>; // Display content for team members
  }

  if (role === 'client') {
    return <div>Client Dashboard</div>; // Display content for clients
  }

  // If no matching role is found, show a default message
  return <div>Unknown Role</div>;
};

export default RoleSpecificContent;
