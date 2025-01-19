local inspect = require("inspect")

local function twoSums(nums, target)
	local cache = {}
	for idx, num in ipairs(nums) do
		local diff = target - num

		if cache[diff] then
			return { cache[diff], idx }
		end

		cache[num] = idx
	end
end

print(inspect(twoSums({ 1, 3, 4, 5, 9, 33, 2, 6 }, 15)))
