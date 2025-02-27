// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

// Uncomment this line to use console.log
// import "hardhat/console.sol";


import "./model.sol";




contract TournamentSystem {
    mapping(string => UserProfile) private profileStore;
    mapping(string => TournamentAccount) private tournamentStore;
    string[] private idStore;
    mapping(string => Squad) private squadStore;
    uint256 private userCount = 0;

    // Get current user's profile
    function getSelf(string memory principalId) public view returns (UserProfile memory) {
        return profileStore[principalId];
    }

    // Get user profile by principal ID
    function getProfileByPrincipal(string memory principalId) public view returns (UserProfile memory) {
        return profileStore[principalId];
    }

    // Get all user profiles
    function getAllUsers() public view returns (UserProfile[] memory) {
        UserProfile[] memory users = new UserProfile[](userCount);
        for (uint256 i = 0; i < userCount; i++) {
            users[i] = profileStore[idStore[i]];
        }
        return users;
    }

    // Count all registered users
    function countAllUsers() public view returns (uint256) {
        return userCount;
    }

    // Count all referrals for a specific referral ID
    function countAllReferral(string memory referralId) public view returns (uint256) {
        uint256 count = 0;
        for (uint256 i = 0; i < userCount; i++) {
            if (keccak256(abi.encodePacked(profileStore[idStore[i]].referral_id)) == keccak256(abi.encodePacked(referralId))) {
                count++;
            }
        }
        return count;
    }

    // Get a profile by username
    function getProfile(string memory username) public view returns (UserProfile memory) {
        return profileStore[username];
    }

    // Create a new user profile
    function createProfile(UserProfile memory profile, string memory principalId) public returns (bool) {
        if (bytes(profileStore[principalId].username).length == 0) {
            idStore.push(principalId);
            userCount++;
        }
        profileStore[principalId] = profile;
        return true;
    }

    // Assign a moderator role
    function setMod(string memory identity) public {
        profileStore[identity].role = Role.Mod;
    }

    // Promote a moderator to Tribunal Mod with specific ModTag
    function addModToTribunal(string memory identity) public returns (bool) {
        if (!validateModTagAvailability()) {
            profileStore[identity].role = Role.TribunalMod;
            return true;
        }
        return false;
    }

    // Check if a user is a moderator
    function isMod(string memory identity) public view returns (bool) {
        return profileStore[identity].role == Role.Mod || profileStore[identity].role == Role.TribunalMod;
    }

    // Get a list of all moderators
    function getMods() public view returns (UserProfile[] memory) {
        uint256 count = 0;
        for (uint256 i = 0; i < userCount; i++) {
            if (isMod(idStore[i])) {
                count++;
            }
        }
        UserProfile[] memory mods = new UserProfile[](count);
        uint256 index = 0;
        for (uint256 i = 0; i < userCount; i++) {
            if (isMod(idStore[i])) {
                mods[index] = profileStore[idStore[i]];
                index++;
            }
        }
        return mods;
    }

    // Assign points to a user
    function assignPoints(string memory identity, Point memory points) public {
        profileStore[identity].points.push(points);
    }

    // Get leaderboard rankings
    function getLeaderboard() public view returns (UserProfile[] memory) {
        UserProfile[] memory users = getAllUsers();
        for (uint256 i = 0; i < users.length - 1; i++) {
            for (uint256 j = i + 1; j < users.length; j++) {
                if (users[i].wins < users[j].wins) {
                    UserProfile memory temp = users[i];
                    users[i] = users[j];
                    users[j] = temp;
                }
            }
        }
        return users;
    }

    // Validate mod tag availability
    function validateModTagAvailability() internal view returns (bool) {
        for (uint256 i = 0; i < userCount; i++) {
            if (profileStore[idStore[i]].role == Role.TribunalMod) {
                return false;
            }
        }
        return true;
    }

    // Squad Management
    function createSquad(string memory squadName, Squad memory squad) public returns (bool) {
        squadStore[squadName] = squad;
        return true;
    }

    function getSquad(string memory squadName) public view returns (Squad memory) {
        return squadStore[squadName];
    }

function addMemberToSquad(string memory squadName, string memory memberId) public returns (bool) {
    Squad storage squad = squadStore[squadName];
    UserProfile memory profile = profileStore[memberId];

    // Create a new member struct and push it to storage
    Member memory newMember = Member({
        name: profile.username,
        principal_id: memberId
    });

    squad.members.push(newMember);
    return true;
}



   function removeMemberFromSquad(string memory squadName, string memory memberName) public returns (bool) {
    Squad storage squad = squadStore[squadName];
    uint256 memberIndex = squad.members.length;

    for (uint256 i = 0; i < squad.members.length; i++) {
        if (keccak256(abi.encodePacked(squad.members[i].name)) == keccak256(abi.encodePacked(memberName))) {
            memberIndex = i;
            break;
        }
    }

    if (memberIndex < squad.members.length) {
        squad.members[memberIndex] = squad.members[squad.members.length - 1];
        squad.members.pop();  // This properly removes the last member
        return true;
    }

    return false;
}

}





